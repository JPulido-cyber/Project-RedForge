import type { Project } from "./types";

const placeholderArchitecture = {
  summary: "Architecture documentation will be added as implementation milestones are completed.",
  nodes: [],
  connections: [],
} as const;

function plannedProject(
  slug: string,
  title: string,
  subtitle: string,
  technologies: Project["technologies"],
): Project {
  return {
    slug,
    title,
    subtitle,
    summary: "This project is planned. Its project record is ready for objectives, evidence, architecture decisions, and measured outcomes as work begins.",
    status: "planned",
    phase: "Discovery",
    updatedAt: "2026-07-23",
    role: "Lead Engineer",
    objectives: ["Define scope and success criteria", "Document architecture decisions", "Capture reproducible evidence"],
    overview: ["The project experience is prepared and will be populated as engineering work is completed."],
    technologies,
    timeline: [{ date: "Planned", title: "Discovery and design", description: "Confirm requirements, constraints, and validation approach.", status: "planned" }],
    architecture: placeholderArchitecture,
    challenges: [],
    lessonsLearned: [],
    gallery: [],
    videos: [],
    codeExamples: [],
    downloads: [],
    certifications: [],
    futureRoadmap: ["Complete discovery", "Build the first validated milestone", "Publish implementation evidence"],
    relatedProjectSlugs: [],
  };
}

export const projects = [
  {
    slug: "enterprise-home-lab",
    title: "Enterprise Home Lab",
    subtitle: "A controlled enterprise environment for infrastructure, identity, monitoring, and defensive engineering.",
    summary: "A multi-system lab designed to reproduce the operational boundaries, identity flows, network segmentation, and observability expected in a small enterprise.",
    status: "active",
    phase: "Foundation",
    updatedAt: "2026-07-23",
    duration: "Ongoing",
    role: "Infrastructure and Security Engineer",
    objectives: [
      "Build a reproducible virtualized enterprise environment.",
      "Separate management, server, client, and security workloads.",
      "Centralize identity and prepare reliable telemetry collection.",
      "Document decisions, failure modes, and validation evidence.",
    ],
    overview: [
      "The Enterprise Home Lab is the shared foundation for RedForge infrastructure and security projects. It provides realistic systems for identity, networking, monitoring, automation, and investigation exercises.",
      "The environment is intentionally developed in measured phases. Each phase defines an objective, implementation evidence, validation steps, and follow-up engineering work.",
    ],
    technologies: [
      { name: "Proxmox VE", category: "platform", description: "Virtualization and workload lifecycle." },
      { name: "Windows Server", category: "infrastructure", description: "Identity and core enterprise services." },
      { name: "Linux", category: "infrastructure", description: "Infrastructure and security workloads." },
      { name: "pfSense", category: "security", description: "Routing, segmentation, and policy enforcement." },
      { name: "Splunk", category: "observability", description: "Centralized telemetry and investigation." },
      { name: "Python", category: "automation", description: "Validation and operational automation." },
    ],
    timeline: [
      { date: "Jul 2026", title: "Platform foundation", description: "Established project standards, virtualization requirements, and documentation workflow.", status: "complete" },
      { date: "Current", title: "Network and compute design", description: "Building segmented networks and the first managed workloads.", status: "active" },
      { date: "Next", title: "Identity services", description: "Deploy domain services, administrative boundaries, and policy baselines.", status: "planned" },
      { date: "Future", title: "Detection engineering", description: "Centralize telemetry and validate defensive use cases.", status: "planned" },
    ],
    architecture: {
      summary: "A segmented virtual environment separates management, identity, client, and monitoring workloads behind a policy-enforcing gateway.",
      nodes: [
        { id: "gateway", label: "Security Gateway", type: "security", description: "Routes segmented networks and applies policy." },
        { id: "hypervisor", label: "Virtualization Host", type: "server", description: "Runs isolated enterprise workloads." },
        { id: "identity", label: "Identity Services", type: "service", description: "Provides directory, DNS, and authentication." },
        { id: "clients", label: "Managed Clients", type: "client", description: "Domain-joined user endpoints." },
        { id: "monitoring", label: "Security Monitoring", type: "security", description: "Collects and analyzes infrastructure telemetry." },
      ],
      connections: [
        { from: "gateway", to: "hypervisor", label: "Segmented uplink" },
        { from: "hypervisor", to: "identity", label: "Virtual network" },
        { from: "identity", to: "clients", label: "Authentication and policy" },
        { from: "gateway", to: "monitoring", label: "Network telemetry" },
      ],
    },
    challenges: [
      { title: "Realism within constrained hardware", context: "Enterprise patterns must fit within a single controlled lab platform.", resolution: "Use phased capacity planning, explicit resource budgets, and lightweight workloads before scaling." },
      { title: "Documentation drift", context: "Rapid lab changes can outpace diagrams and operating notes.", resolution: "Treat documentation updates and validation evidence as completion criteria for every milestone." },
    ],
    lessonsLearned: [
      { title: "Boundaries before workloads", insight: "Network and administrative boundaries should be explicit before services are deployed." },
      { title: "Evidence is part of implementation", insight: "A configuration is not complete until its expected behavior has been validated and recorded." },
    ],
    gallery: [
      { alt: "Virtualization dashboard placeholder", caption: "Virtualization and capacity overview — evidence pending." },
      { alt: "Network segmentation diagram placeholder", caption: "Segment and policy validation — evidence pending." },
      { alt: "Identity services screenshot placeholder", caption: "Identity milestone — planned." },
    ],
    videos: [{ title: "Environment walkthrough", description: "A guided architecture and validation walkthrough will be published after the foundation milestone." }],
    codeExamples: [{
      title: "Connectivity validation",
      language: "python",
      description: "Framework example for repeatable service checks.",
      code: "targets = [\"gateway\", \"identity\", \"monitoring\"]\n\nfor target in targets:\n    validate_connectivity(target)\n",
    }],
    downloads: [
      { title: "Architecture brief", description: "Versioned design summary and decision record.", format: "PDF" },
      { title: "Validation checklist", description: "Reproducible milestone verification steps.", format: "Markdown" },
    ],
    certifications: [{ name: "CompTIA Network+", issuer: "CompTIA" }],
    futureRoadmap: ["Complete segmented network foundation", "Deploy identity services", "Establish centralized logging", "Publish recovery and validation runbooks"],
    relatedProjectSlugs: ["active-directory-lab", "splunk-detection-lab", "network-engineering"],
  },
  plannedProject("active-directory-lab", "Active Directory Lab", "Identity, policy, authentication, and administrative controls.", [{ name: "Windows Server", category: "infrastructure" }]),
  plannedProject("splunk-detection-lab", "Splunk Detection Lab", "Telemetry ingestion, investigation, dashboards, and detection workflows.", [{ name: "Splunk", category: "observability" }]),
  plannedProject("python-automation", "Python Automation", "Operational tooling, validation, and repeatable engineering workflows.", [{ name: "Python", category: "automation" }]),
  plannedProject("aws-security", "AWS Security", "Cloud identity, logging, networking, and least-privilege engineering.", [{ name: "AWS", category: "cloud" }]),
  plannedProject("threat-hunting", "Threat Hunting", "Evidence-driven investigation and defensible analytical conclusions.", [{ name: "Splunk", category: "observability" }]),
  plannedProject("vulnerability-management", "Vulnerability Management", "Asset visibility, prioritization, remediation, and validation.", [{ name: "Nessus", category: "security" }]),
  plannedProject("network-engineering", "Network Engineering", "Routing, segmentation, services, and resilient network operations.", [{ name: "pfSense", category: "infrastructure" }]),
] satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
