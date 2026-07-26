export type LabTopologyStatus = "operational" | "in-progress" | "planned" | "retired";
export type LabTopologyNodeType = "virtualization" | "server" | "endpoint" | "telemetry-platform" | "planned-capability";

export interface LabTopologyRecord {
  label: string;
  href: string;
}

export interface LabTopologyNode {
  id: string;
  hostname: string;
  type: LabTopologyNodeType;
  platform: string;
  status: LabTopologyStatus;
  purpose: string;
  roles: readonly string[];
  services: readonly string[];
  securityTooling: readonly string[];
  telemetryState: string;
  relatedEngineeringLogs: readonly LabTopologyRecord[];
  relatedArchitectureDecisions: readonly LabTopologyRecord[];
  parentId?: string;
}

export type LabTopologyConnectionType = "hosts" | "identity" | "dns" | "telemetry" | "planned";

export interface LabTopologyConnection {
  id: string;
  source: string;
  target: string;
  type: LabTopologyConnectionType;
  status: LabTopologyStatus;
  label: string;
  description: string;
}

export interface LabTopology {
  id: string;
  title: string;
  updatedAt: string;
  nodes: readonly LabTopologyNode[];
  connections: readonly LabTopologyConnection[];
}
