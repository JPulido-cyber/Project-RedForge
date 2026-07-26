"use client";

import { useState } from "react";

import type { LabTopology, LabTopologyNode } from "@/content/lab";
import { LabIcon, type LabIconName } from "./lab-icon";

const statusLabels = { operational: "Operational", "in-progress": "In progress", planned: "Planned", retired: "Retired" } as const;

function nodeIcon(node: LabTopologyNode): LabIconName {
  if (node.type === "server") return "server";
  if (node.type === "endpoint") return "desktop";
  if (node.type === "telemetry-platform") return "terminal";
  if (node.type === "virtualization") return "layers";
  return "network";
}

function NodeButton({ node, selected, onSelect }: { node: LabTopologyNode; selected: boolean; onSelect: (id: string) => void }) {
  return (
    <button className="topology-node" type="button" aria-pressed={selected} aria-controls="topology-node-details" data-node-id={node.id} data-status={node.status} onClick={() => onSelect(node.id)}>
      <LabIcon name={nodeIcon(node)} />
      <span><strong>{node.name}</strong><small>{node.platform}</small></span>
      <i className={`topology-state ${node.status}`} aria-label={statusLabels[node.status]} />
    </button>
  );
}

function DetailList({ title, values, fallback = "None recorded" }: { title: string; values: readonly string[]; fallback?: string }) {
  return <div><dt>{title}</dt><dd>{values.length ? <ul>{values.map((value) => <li key={value}>{value}</li>)}</ul> : fallback}</dd></div>;
}

export function EnterpriseLabTopology({ topology }: { topology: LabTopology }) {
  const [selectedId, setSelectedId] = useState("rf-dc01");
  const selected = topology.nodes.find((node) => node.id === selectedId) ?? topology.nodes[0];
  const boundary = topology.nodes.find((node) => node.type === "virtualization");
  const dc = topology.nodes.find((node) => node.id === "rf-dc01");
  const endpoint = topology.nodes.find((node) => node.id === "rf-win11-01");
  const telemetry = topology.nodes.find((node) => node.type === "telemetry-platform");
  const planned = topology.nodes.filter((node) => node.status === "planned");

  if (!selected || !boundary || !dc || !endpoint || !telemetry) return null;

  return (
    <div className="enterprise-topology">
      <div className="topology-heading">
        <div><p className="technical-eyebrow">Verified topology</p><p>Interactive view of the verified environment. Select any system to explore details and related records.</p></div>
        <span><LabIcon name="network" /> Topology legend</span>
      </div>

      <div className="topology-stage" aria-label="Verified operational topology">
        <section className="topology-boundary virtualization-boundary" aria-label="Virtualization boundary">
          <p>▣ Virtualization boundary</p>
          <NodeButton node={boundary} selected={selected.id === boundary.id} onSelect={setSelectedId} />
        </section>
        <div className="topology-connector host-connector" aria-hidden />
        <div className="topology-node-row">
          <NodeButton node={dc} selected={selected.id === dc.id} onSelect={setSelectedId} />
          <span className="route identity-route" aria-label="Domain identity connection">→</span>
          <NodeButton node={endpoint} selected={selected.id === endpoint.id} onSelect={setSelectedId} />
          <span className="route telemetry-route"><small>Sysmon telemetry</small>→</span>
          <NodeButton node={telemetry} selected={selected.id === telemetry.id} onSelect={setSelectedId} />
        </div>
        <span className="route security-route"><small>Windows security telemetry</small>→</span>
        <div className="topology-service-row">
          <span>Active Directory DS<small>Identity service</small></span>
          <span>DNS<small>Name resolution</small></span>
          <span>Sysmon<small>Telemetry source</small></span>
        </div>
        <section className="topology-planned" aria-label="Planned capabilities">
          <p>▣ Network boundary — planned</p>
          {planned.map((node) => <NodeButton key={node.id} node={node} selected={selected.id === node.id} onSelect={setSelectedId} />)}
        </section>
      </div>

      <div className="topology-legend" aria-label="Topology status legend">
        <span><i className="topology-state operational" /> <strong>Operational</strong><small>Verified and active</small></span>
        <span><i className="topology-state planned" /> <strong>Planned</strong><small>Not yet implemented</small></span>
        <span><i className="connection-key established" /> <strong>Established connection</strong><small>Verified and active</small></span>
        <span><i className="connection-key planned" /> <strong>Planned connection</strong><small>Future implementation</small></span>
      </div>

      <section id="topology-node-details" className="topology-node-details" aria-live="polite" aria-label="Selected topology node details">
        <div className="selected-system-summary">
          <p className="technical-eyebrow">Selected system</p>
          <div><LabIcon name={nodeIcon(selected)} /><span><h2>{selected.name}</h2><small>{selected.platform}</small><strong className={`topology-status ${selected.status}`}>{statusLabels[selected.status]}</strong></span></div>
        </div>
        <dl>
          <div><dt>Purpose</dt><dd>{selected.purpose}</dd></div>
          <DetailList title="Roles" values={selected.roles} />
          <DetailList title="Services" values={selected.services} />
          <div><dt>Telemetry</dt><dd>{selected.telemetryState ?? "No telemetry claim recorded"}</dd></div>
          <div className="topology-related-records"><dt>Related records</dt><dd>{[...selected.relatedEngineeringLogs, ...selected.relatedArchitectureDecisions].length ? [...selected.relatedEngineeringLogs, ...selected.relatedArchitectureDecisions].map((record) => <a key={record.href} href={record.href}>{record.label} <span aria-hidden>→</span></a>) : "No related record published"}</dd></div>
        </dl>
      </section>
    </div>
  );
}
