import type { LabIconName } from "@/components/lab/lab-icon";

export const enterpriseCapabilities = [
  { icon: "layers", title: "Enterprise Foundation", description: "Virtualization, endpoints, and core infrastructure that host and support the environment." },
  { icon: "shield", title: "Identity Services", description: "Identity, authentication, and name services that control access and policy." },
  { icon: "search", title: "Security Operations", description: "Telemetry collection, logging, and detection to observe and analyze activity." },
  { icon: "network", title: "Network Architecture", description: "Network security, segmentation, and traffic control across trust boundaries." },
  { icon: "crosshair", title: "Offensive Platform", description: "Assessment, tooling, and attack-simulation capabilities for offensive operations." },
  { icon: "shield", title: "Recovery & Resilience", description: "Backup, recovery, and resilience systems to restore and validate operational continuity." },
] as const satisfies readonly { icon: LabIconName; title: string; description: string }[];

export const enterpriseRoadmap = [
  { phase: "Phase 1", title: "Foundation & Identity", status: "complete", items: ["Virtualization platform", "Domain controller", "Endpoint deployment", "Baseline telemetry"] },
  { phase: "Phase 2", title: "Telemetry & Visibility", status: "complete", items: ["Centralized logging (Splunk)", "Sysmon deployment", "Log forwarding pipeline", "Telemetry validation"] },
  { phase: "Phase 3", title: "Network & Segmentation", status: "planned", items: ["VLAN design", "Firewall evaluation", "Network segmentation", "Traffic-flow validation"] },
  { phase: "Phase 4", title: "Assessment Platform", status: "planned", items: ["Offensive workstation", "Tooling and access control", "Lab trust boundaries", "Engagement workflows"] },
  { phase: "Phase 5", title: "Advanced Operations", status: "future", items: ["Detection engineering", "Threat hunting", "Adversary simulation", "Reporting automation"] },
] as const;
