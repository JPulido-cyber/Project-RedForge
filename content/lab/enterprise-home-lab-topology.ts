import type { LabTopology } from "./types";

const eng010 = { label: "ENG-010 — Centralized Telemetry Pipeline Deployment", href: "/documentation/eng-010-centralized-telemetry-pipeline-deployment" } as const;
const eng011 = { label: "ENG-011 — Data-Driven Enterprise Home Lab Topology", href: "/documentation/eng-011-data-driven-enterprise-home-lab-topology" } as const;

export const enterpriseHomeLabTopology = {
  id: "enterprise-home-lab",
  title: "Verified Enterprise Home Lab topology",
  updatedAt: "2026-07-26",
  nodes: [
    {
      id: "vmware-workstation", hostname: "RF-VMHOST01", type: "virtualization", platform: "VMware Workstation", status: "operational",
      purpose: "Provides the verified virtualization boundary for the current Windows lab systems.",
      roles: ["Virtualization platform", "Lab workload host"], services: ["Virtual machine execution"], securityTooling: [],
      telemetryState: "Host telemetry is outside the current verified telemetry scope.",
      relatedEngineeringLogs: [eng011], relatedArchitectureDecisions: [],
    },
    {
      id: "rf-dc01", hostname: "RF-DC01", type: "server", platform: "Windows Server 2025", status: "operational",
      purpose: "Provides the verified identity, domain, and internal name-resolution services.",
      roles: ["Domain controller", "Identity service", "DNS service"], services: ["Active Directory Domain Services", "DNS", "Domain services"],
      securityTooling: ["Splunk Universal Forwarder"], telemetryState: "Windows security telemetry is received and searchable in Splunk Enterprise.",
      relatedEngineeringLogs: [{ label: "RF-DC01 Server Establishment Log", href: "/documentation/server-establishment-log" }, eng010, eng011],
      relatedArchitectureDecisions: [], parentId: "vmware-workstation",
    },
    {
      id: "rf-win11-01", hostname: "RF-WIN11-01", type: "endpoint", platform: "Windows 11", status: "operational",
      purpose: "Provides the verified domain-joined Windows endpoint used for telemetry validation.",
      roles: ["Domain-joined client", "Validation endpoint"], services: ["Domain membership"],
      securityTooling: ["Microsoft Sysmon", "Splunk Universal Forwarder"], telemetryState: "Sysmon telemetry is received and searchable in Splunk Enterprise.",
      relatedEngineeringLogs: [eng010, eng011], relatedArchitectureDecisions: [], parentId: "vmware-workstation",
    },
    {
      id: "splunk-enterprise", hostname: "RF-SPLUNK01", type: "telemetry-platform", platform: "Splunk Enterprise", status: "operational",
      purpose: "Centralizes verified telemetry from RF-DC01 and RF-WIN11-01 for search and investigation.",
      roles: ["Centralized telemetry", "Security investigation"], services: ["Telemetry ingestion", "Indexing", "SPL retrieval"],
      securityTooling: ["Splunk Enterprise"], telemetryState: "Centralized ingestion and initial threat-hunting retrieval are verified.",
      relatedEngineeringLogs: [eng010, eng011], relatedArchitectureDecisions: [],
    },
    {
      id: "network-segmentation", hostname: "RF-NETWORK-01", type: "planned-capability", platform: "Network Segmentation (planned)", status: "planned",
      purpose: "Future capability for defining trust boundaries and controlled lab traffic flows.",
      roles: ["Planned trust-boundary enforcement"], services: ["No operational services"], securityTooling: [],
      telemetryState: "No operational telemetry; this capability remains planned.",
      relatedEngineeringLogs: [eng011], relatedArchitectureDecisions: [],
    },
  ],
  connections: [
    { id: "vmware-hosts-dc", source: "vmware-workstation", target: "rf-dc01", type: "hosts", status: "operational", label: "Virtual machine hosting", description: "RF-DC01 operates within the VMware Workstation virtualization boundary." },
    { id: "vmware-hosts-win11", source: "vmware-workstation", target: "rf-win11-01", type: "hosts", status: "operational", label: "Virtual machine hosting", description: "RF-WIN11-01 operates within the VMware Workstation virtualization boundary." },
    { id: "dc-identity-win11", source: "rf-dc01", target: "rf-win11-01", type: "identity", status: "operational", label: "Domain identity", description: "RF-WIN11-01 is joined to the domain services provided by RF-DC01." },
    { id: "dc-dns-win11", source: "rf-dc01", target: "rf-win11-01", type: "dns", status: "operational", label: "Internal DNS", description: "RF-DC01 provides the verified internal DNS service used by the domain-joined endpoint." },
    { id: "dc-telemetry-splunk", source: "rf-dc01", target: "splunk-enterprise", type: "telemetry", status: "operational", label: "Windows security telemetry", description: "The Splunk Universal Forwarder sends RF-DC01 telemetry to Splunk Enterprise." },
    { id: "win11-telemetry-splunk", source: "rf-win11-01", target: "splunk-enterprise", type: "telemetry", status: "operational", label: "Sysmon telemetry", description: "The Splunk Universal Forwarder sends RF-WIN11-01 Sysmon telemetry to Splunk Enterprise." },
    { id: "planned-segmentation", source: "network-segmentation", target: "vmware-workstation", type: "planned", status: "planned", label: "Future trust boundaries", description: "Segmentation remains planned and is not represented as operational infrastructure." },
  ],
} as const satisfies LabTopology;
