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

function NodeButton({ node, selected, inactive, onSelect }: { node: LabTopologyNode; selected: boolean; inactive: boolean; onSelect: (id: string) => void }) {
  return (
    <button className="topology-node" type="button" aria-pressed={selected} aria-controls="topology-node-details" data-node-id={node.id} data-status={node.status} data-inactive={inactive || undefined} onClick={() => onSelect(node.id)}>
      <LabIcon name={nodeIcon(node)} />
      <span><strong>{node.hostname}</strong><small>{node.platform}</small></span>
      <i className={`topology-state ${node.status}`} aria-label={statusLabels[node.status]} />
    </button>
  );
}

function DetailList({ title, values }: { title: string; values: readonly string[] }) {
  return <div><dt>{title}</dt><dd><ul>{values.map((value) => <li key={value}>{value}</li>)}</ul></dd></div>;
}

function ServiceTile({ id, label, description, onSelect }: { id: string; label: string; description: string; onSelect?: (id: string) => void }) {
  if (onSelect) return <button type="button" onClick={() => onSelect(id)}><span>{label}</span><small>{description}</small></button>;
  return <span data-service-id={id}><span>{label}</span><small>{description}</small></span>;
}

export function EnterpriseLabTopology({ topology }: { topology: LabTopology }) {
  const [selectedId, setSelectedId] = useState("rf-dc01");
  const selected = topology.nodes.find((node) => node.id === selectedId) ?? topology.nodes[0];
  const boundary = topology.nodes.find((node) => node.type === "virtualization");
  const dc = topology.nodes.find((node) => node.id === "rf-dc01");
  const endpoint = topology.nodes.find((node) => node.id === "rf-win11-01");
  const telemetry = topology.nodes.find((node) => node.type === "telemetry-platform");
  const planned = topology.nodes.filter((node) => node.status === "planned");
  const isInactive = (node: LabTopologyNode) => node.id !== selected.id;
  const isRelated = (...connectionIds: string[]) => topology.connections.some((connection) =>
    connectionIds.includes(connection.id) &&
    (connection.source === selected.id || connection.target === selected.id),
  );

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
          <NodeButton node={boundary} selected={selected.id === boundary.id} inactive={isInactive(boundary)} onSelect={setSelectedId} />
        </section>
        <div key={`${selectedId}-host`} className="topology-connector host-connector" data-active={isRelated("hyperv-hosts-dc", "hyperv-hosts-win11") || undefined} aria-hidden />
        <div className="topology-node-row">
          <NodeButton node={dc} selected={selected.id === dc.id} inactive={isInactive(dc)} onSelect={setSelectedId} />
          <span key={`${selectedId}-identity`} className="route identity-route" data-active={isRelated("dc-identity-win11", "dc-dns-win11") || undefined} aria-label="Domain identity connection">→</span>
          <NodeButton node={endpoint} selected={selected.id === endpoint.id} inactive={isInactive(endpoint)} onSelect={setSelectedId} />
          <span key={`${selectedId}-sysmon`} className="route telemetry-route" data-active={isRelated("win11-telemetry-splunk") || undefined}><small>Sysmon telemetry</small>→</span>
          <NodeButton node={telemetry} selected={selected.id === telemetry.id} inactive={isInactive(telemetry)} onSelect={setSelectedId} />
        </div>
        <span key={`${selectedId}-security`} className="route security-route" data-active={isRelated("dc-telemetry-splunk") || undefined}><small>Windows security telemetry</small>→</span>
        <div className="topology-service-row">
          <ServiceTile id="active-directory-domain-services" label="Active Directory DS" description="Identity service" />
          <ServiceTile id="dns" label="DNS" description="Name resolution" />
          <ServiceTile id="sysmon" label="Sysmon" description="Telemetry source" />
        </div>
        <section className="topology-planned" aria-label="Planned capabilities">
          <p>▣ Network boundary — planned</p>
          {planned.map((node) => <NodeButton key={node.id} node={node} selected={selected.id === node.id} inactive={isInactive(node)} onSelect={setSelectedId} />)}
        </section>
      </div>

      <div className="topology-legend" aria-label="Topology status legend">
        <span><i className="topology-state operational" /> <strong>Operational</strong><small>Verified and active</small></span>
        <span><i className="topology-state planned" /> <strong>Planned</strong><small>Not yet implemented</small></span>
        <span><i className="connection-key established" /> <strong>Established connection</strong><small>Verified and active</small></span>
        <span><i className="connection-key planned" /> <strong>Planned connection</strong><small>Future implementation</small></span>
      </div>

      <section key={selected.id} id="topology-node-details" className="topology-node-details" aria-live="polite" aria-label="Selected topology node details">
        <div className="selected-system-summary">
          <p className="technical-eyebrow">Selected system</p>
          <div><LabIcon name={nodeIcon(selected)} /><span><h2>{selected.hostname}</h2><small>{selected.platform}</small><strong className={`topology-status ${selected.status}`}>{statusLabels[selected.status]}</strong></span></div>
        </div>
        <dl>
          <div><dt>Purpose</dt><dd>{selected.purpose}</dd></div>
          <DetailList title="Roles" values={selected.roles} />
          <DetailList title="Services" values={selected.services} />
          <div><dt>Telemetry</dt><dd>{selected.telemetryState}</dd></div>
          <div className="topology-related-records"><dt>Related records</dt><dd>{[...selected.relatedEngineeringLogs, ...selected.relatedArchitectureDecisions].length ? [...selected.relatedEngineeringLogs, ...selected.relatedArchitectureDecisions].map((record) => <a key={record.href} href={record.href}>{record.label} <span aria-hidden>→</span></a>) : "No related record published"}</dd></div>
        </dl>
      </section>
    </div>
  );
}
