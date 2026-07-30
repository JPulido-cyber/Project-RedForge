import type { LabTopology } from "./types";

const eng013 = { label: "ENG-013 — Enterprise Active Directory Forest Deployment", href: "/documentation/eng-013-enterprise-active-directory-forest-deployment" } as const;
const eng014 = { label: "ENG-014 — Enterprise Security Monitoring Platform Deployment", href: "/documentation/eng-014-enterprise-security-monitoring-platform-deployment" } as const;
const milestone004 = { label: "MILESTONE-004 — Enterprise Identity & Security Foundation Complete", href: "/documentation/milestone-004-enterprise-identity-security-foundation-complete" } as const;

export const enterpriseHomeLabTopology = {
  id: "enterprise-home-lab",
  title: "Verified Enterprise Home Lab topology",
  updatedAt: "2026-07-30",
  nodes: [
    {
      id: "hyper-v", hostname: "RF-VMHOST01", type: "virtualization", platform: "Microsoft Hyper-V", status: "operational",
      purpose: "Provides the verified enterprise virtualization boundary for the current Windows lab systems.",
      roles: ["Enterprise virtualization", "Lab workload host"], services: ["Hyper-V virtual machine execution"], securityTooling: [],
      telemetryState: "Guest-system telemetry is centralized in Splunk Enterprise; host telemetry remains outside the current verified scope.",
      relatedEngineeringLogs: [eng013, eng014, milestone004], relatedArchitectureDecisions: [],
    },
    {
      id: "rf-dc01", hostname: "RF-DC01", type: "server", platform: "Windows Server 2025", status: "operational",
      purpose: "Provides verified enterprise identity, authentication, authorization, and integrated name-resolution services.",
      roles: ["Domain controller", "Identity service", "DNS service"], services: ["Active Directory Domain Services", "Integrated DNS", "Enterprise authentication"],
      securityTooling: ["Splunk Universal Forwarder"], telemetryState: "Windows security and authentication telemetry is received and searchable in Splunk Enterprise.",
      relatedEngineeringLogs: [eng013, eng014, milestone004],
      relatedArchitectureDecisions: [], parentId: "hyper-v",
    },
    {
      id: "rf-win11-01", hostname: "RF-WIN11-01", type: "endpoint", platform: "Windows 11", status: "operational",
      purpose: "Provides the verified domain-integrated Windows endpoint used for enterprise administration and telemetry validation.",
      roles: ["Domain-integrated client", "Validation endpoint"], services: ["Domain authentication", "Enterprise endpoint"],
      securityTooling: ["Microsoft Sysmon", "Splunk Universal Forwarder"], telemetryState: "Windows, Sysmon, and authentication telemetry is received and searchable in Splunk Enterprise.",
      relatedEngineeringLogs: [eng013, eng014, milestone004], relatedArchitectureDecisions: [], parentId: "hyper-v",
    },
    {
      id: "splunk-enterprise", hostname: "RF-SPLUNK01", type: "telemetry-platform", platform: "Splunk Enterprise", status: "operational",
      purpose: "Provides operational enterprise monitoring for verified telemetry from RF-DC01 and RF-WIN11-01.",
      roles: ["Centralized monitoring", "Enterprise search", "Operational visibility"], services: ["Telemetry ingestion", "Enterprise indexes", "SPL search", "Operational dashboards"],
      securityTooling: ["Splunk Enterprise"], telemetryState: "Centralized ingestion, indexing, SPL retrieval, and operational dashboards are verified.",
      relatedEngineeringLogs: [eng014, milestone004], relatedArchitectureDecisions: [],
    },
    {
      id: "network-segmentation", hostname: "RF-NETWORK-01", type: "planned-capability", platform: "Network Segmentation (planned)", status: "planned",
      purpose: "Future capability for defining trust boundaries and controlled lab traffic flows.",
      roles: ["Planned trust-boundary enforcement"], services: ["No operational services"], securityTooling: [],
      telemetryState: "No operational telemetry; this capability remains planned.",
      relatedEngineeringLogs: [milestone004], relatedArchitectureDecisions: [],
    },
  ],
  connections: [
    { id: "hyperv-hosts-dc", source: "hyper-v", target: "rf-dc01", type: "hosts", status: "operational", label: "Virtual machine hosting", description: "RF-DC01 operates within the Microsoft Hyper-V virtualization boundary." },
    { id: "hyperv-hosts-win11", source: "hyper-v", target: "rf-win11-01", type: "hosts", status: "operational", label: "Virtual machine hosting", description: "RF-WIN11-01 operates within the Microsoft Hyper-V virtualization boundary." },
    { id: "dc-identity-win11", source: "rf-dc01", target: "rf-win11-01", type: "identity", status: "operational", label: "Domain identity", description: "RF-WIN11-01 uses the enterprise domain services provided by RF-DC01." },
    { id: "dc-dns-win11", source: "rf-dc01", target: "rf-win11-01", type: "dns", status: "operational", label: "Integrated DNS", description: "RF-DC01 provides verified integrated DNS to the domain-integrated endpoint." },
    { id: "dc-telemetry-splunk", source: "rf-dc01", target: "splunk-enterprise", type: "telemetry", status: "operational", label: "Windows security telemetry", description: "The Splunk Universal Forwarder sends RF-DC01 telemetry to Splunk Enterprise." },
    { id: "win11-telemetry-splunk", source: "rf-win11-01", target: "splunk-enterprise", type: "telemetry", status: "operational", label: "Sysmon telemetry", description: "The Splunk Universal Forwarder sends RF-WIN11-01 telemetry to Splunk Enterprise." },
    { id: "planned-segmentation", source: "network-segmentation", target: "hyper-v", type: "planned", status: "planned", label: "Future trust boundaries", description: "Segmentation remains planned and is not represented as operational infrastructure." },
  ],
} as const satisfies LabTopology;
