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
  { phase: "Phase 5", title: "Endpoint & Policy Engineering", status: "planned", items: ["Endpoint expansion", "Group Policy engineering", "Security baselines", "Policy validation"] },
  { phase: "Phase 6", title: "Detection & Threat Hunting", status: "planned", items: ["Detection engineering", "Correlation searches", "Threat-hunting workflows", "Coverage validation"] },
  { phase: "Phase 7", title: "Attack Simulation & Purple Team", status: "future", items: ["Authorized attack simulation", "Detection validation", "Purple-team workflows", "Operational reporting"] },
  { phase: "Phase 8", title: "Automation & Cloud Expansion", status: "future", items: ["Engineering automation", "Security orchestration", "Controlled cloud integration", "Hybrid visibility"] },
] as const;
