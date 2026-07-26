"use client";

import { useState } from "react";

import type { LabTopology, LabTopologyNode } from "@/content/lab";

const statusLabels = { operational: "Operational", "in-progress": "In progress", planned: "Planned", retired: "Retired" } as const;

function StatusBadge({ status }: Pick<LabTopologyNode, "status">) {
  return <span className={`topology-status ${status}`}>{statusLabels[status]}</span>;
}

function NodeButton({ node, selected, onSelect }: { node: LabTopologyNode; selected: boolean; onSelect: (id: string) => void }) {
  return (
    <button className="topology-node" type="button" aria-pressed={selected} aria-controls="topology-node-details" data-node-id={node.id} data-status={node.status} onClick={() => onSelect(node.id)}>
      <span className="topology-node-heading"><strong>{node.name}</strong><StatusBadge status={node.status} /></span>
      <span>{node.platform}</span>
      <small>{node.purpose}</small>
    </button>
  );
}

export function EnterpriseLabTopology({ topology }: { topology: LabTopology }) {
  const [selectedId, setSelectedId] = useState("rf-dc01");
  const selected = topology.nodes.find((node) => node.id === selectedId) ?? topology.nodes[0];
  const boundary = topology.nodes.find((node) => node.type === "virtualization");
  const virtualMachines = topology.nodes.filter((node) => node.parentId === boundary?.id);
  const telemetryPlatform = topology.nodes.find((node) => node.type === "telemetry-platform");
  const planned = topology.nodes.filter((node) => node.status === "planned");
  const verifiedConnections = topology.connections.filter((connection) => connection.status === "operational");

  if (!selected || !boundary || !telemetryPlatform) return null;

  return (
    <div className="enterprise-topology">
      <div className="panel-heading"><span>Verified topology</span><span>Updated {topology.updatedAt}</span></div>
      <p className="topology-introduction">Select a system to inspect its verified purpose, services, telemetry state, and related engineering records.</p>
      <div className="topology-stage" aria-label="Verified operational topology">
        <section className="topology-boundary" aria-labelledby="virtualization-boundary-title">
          <div className="topology-boundary-heading">
            <div><p className="technical-eyebrow">Virtualization boundary</p><h2 id="virtualization-boundary-title">{boundary.name}</h2></div>
            <StatusBadge status={boundary.status} />
          </div>
          <NodeButton node={boundary} selected={selected.id === boundary.id} onSelect={setSelectedId} />
          <div className="topology-vm-grid">
            {virtualMachines.map((node) => <NodeButton key={node.id} node={node} selected={selected.id === node.id} onSelect={setSelectedId} />)}
          </div>
          <div className="topology-service-paths">
            {verifiedConnections.filter((connection) => connection.type === "identity" || connection.type === "dns").map((connection) => <span key={connection.id}>{connection.label}</span>)}
          </div>
        </section>
        <div className="topology-telemetry-routes" aria-label="Telemetry routes">
          {verifiedConnections.filter((connection) => connection.type === "telemetry").map((connection) => <div key={connection.id}><span aria-hidden>→</span><strong>{connection.label}</strong></div>)}
        </div>
        <section className="topology-destination" aria-label="Central telemetry platform">
          <p className="technical-eyebrow">Central telemetry</p>
          <NodeButton node={telemetryPlatform} selected={selected.id === telemetryPlatform.id} onSelect={setSelectedId} />
        </section>
      </div>
      <section className="topology-relationships" aria-labelledby="verified-relationships-title">
        <h2 id="verified-relationships-title">Verified relationships</h2>
        <ul>
          {verifiedConnections.map((connection) => <li key={connection.id} data-connection-type={connection.type}><strong>{connection.label}</strong><span>{connection.description}</span></li>)}
        </ul>
      </section>
      <section id="topology-node-details" className="topology-node-details" aria-live="polite" aria-label="Selected topology node details">
        <div className="topology-details-heading"><div><p className="technical-eyebrow">Selected system</p><h2>{selected.name}</h2></div><StatusBadge status={selected.status} /></div>
        <p>{selected.purpose}</p>
        <dl>
          <div><dt>Platform</dt><dd>{selected.platform}</dd></div>
          <div><dt>Roles</dt><dd>{selected.roles.length ? selected.roles.join(" · ") : "None recorded"}</dd></div>
          <div><dt>Services</dt><dd>{selected.services.length ? selected.services.join(" · ") : "None recorded"}</dd></div>
          <div><dt>Security tooling</dt><dd>{selected.securityTooling.length ? selected.securityTooling.join(" · ") : "None recorded"}</dd></div>
          <div><dt>Telemetry</dt><dd>{selected.telemetryState ?? "No telemetry claim recorded"}</dd></div>
        </dl>
        {(selected.relatedEngineeringLogs.length > 0 || selected.relatedArchitectureDecisions.length > 0) && (
          <div className="topology-related-records">
            <strong>Related records</strong>
            {[...selected.relatedEngineeringLogs, ...selected.relatedArchitectureDecisions].map((record) => <a key={record.href} href={record.href}>{record.label} <span aria-hidden>→</span></a>)}
          </div>
        )}
      </section>
      <section className="topology-planned" aria-labelledby="planned-capabilities-title">
        <div><p className="technical-eyebrow">Separated lifecycle state</p><h2 id="planned-capabilities-title">Planned capabilities</h2></div>
        <p>These items describe future intent only. They are not operational infrastructure or implementation evidence.</p>
        <div>{planned.map((node) => <NodeButton key={node.id} node={node} selected={selected.id === node.id} onSelect={setSelectedId} />)}</div>
      </section>
    </div>
  );
}
