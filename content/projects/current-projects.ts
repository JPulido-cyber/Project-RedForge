import type { Project, Technology } from "./types";
import {
  activeDirectoryEvidence,
  enterpriseHomeLabEvidence,
  securityMonitoringEvidence,
} from "@/content/evidence";

const foundationRecords = [
  { id: "ENG-012", title: "Engineering Platform Architecture Refinement", href: "/documentation/eng-012-engineering-platform-architecture-refinement" },
  { id: "ENG-013", title: "Enterprise Active Directory Forest Deployment", href: "/documentation/eng-013-enterprise-active-directory-forest-deployment" },
  { id: "ENG-014", title: "Enterprise Security Monitoring Platform Deployment", href: "/documentation/eng-014-enterprise-security-monitoring-platform-deployment" },
  { id: "MILESTONE-004", title: "Enterprise Identity & Security Foundation Complete", href: "/documentation/milestone-004-enterprise-identity-security-foundation-complete" },
] as const;

export function currentEnterpriseHomeLab(base: Project): Project {
  return {
    ...base,
    subtitle: "A continuously engineered enterprise cybersecurity laboratory for infrastructure, identity, centralized monitoring, documentation, and future offensive-security validation.",
    summary: "ACTIVE — The enterprise identity and security-monitoring foundation is operational. Active Directory Domain Services, integrated DNS, centralized authentication, Splunk Enterprise, Universal Forwarders, indexed telemetry, SPL searches, and operational dashboards are documented and validated.",
    phase: "Enterprise Foundation Complete",
    updatedAt: "2026-07-30",
    snapshot: {
      startDate: "July 2026",
      operationalSystems: "4 verified",
      validationStatus: "Foundation validated",
    },
    validation: [
      { label: "Enterprise Active Directory forest deployment validated in ENG-013.", status: "verified" },
      { label: "Integrated DNS and centralized authentication validated.", status: "verified" },
      { label: "Organizational Unit, user, group, and administrative structures validated.", status: "verified" },
      { label: "Splunk Enterprise, Universal Forwarders, and event ingestion validated in ENG-014.", status: "verified" },
      { label: "Enterprise indexes, SPL searches, and operational dashboards validated.", status: "verified" },
      { label: "Detection engineering and offensive-security validation remain future work.", status: "planned" },
    ],
    engineeringRecords: foundationRecords,
    retrospective: {
      biggestChallenge: "Establishing enterprise identity and reliable centralized telemetry as integrated, validated services rather than isolated installations.",
      solutionSelected: "Sequence identity first, validate integrated DNS and administrative boundaries, then deploy Splunk Enterprise and verify forwarding, indexing, searches, and dashboards end to end.",
      tradeoffsConsidered: "The foundation prioritizes a maintainable single-site lab over premature resilience or detection breadth; redundancy, advanced policy, and detection coverage remain governed future work.",
      futureImprovements: "Expand endpoint engineering, Group Policy, detection content, threat hunting, attack simulation, automation, and cloud integration through new evidence-backed records.",
    },
    objectives: [
      "IMPLEMENTED — Maintain version-controlled architecture, engineering, milestone, and evidence standards.",
      "IMPLEMENTED — Operate enterprise virtualization, Windows Server, Active Directory Domain Services, integrated DNS, Organizational Units, users, groups, and administrative boundaries.",
      "IMPLEMENTED — Operate Splunk Enterprise with Universal Forwarders, centralized logging, enterprise indexes, SPL searches, and operational dashboards.",
      "PLANNED — Expand endpoint and Group Policy engineering after the completed enterprise foundation.",
      "FUTURE — Develop detection engineering, threat hunting, attack simulation, purple-team operations, automation, and cloud expansion.",
    ],
    overview: [
      "Project RedForge is a continuously engineered enterprise cybersecurity laboratory. Its operational foundation combines centralized identity, enterprise administration, and security monitoring within a version-controlled documentation system.",
      "Active Directory Domain Services and integrated DNS provide centralized identity and authentication. Splunk Enterprise receives indexed telemetry through Universal Forwarders and supports validated SPL searches and operational dashboards.",
      "Milestone-004 closes the foundational identity and security-monitoring phase. Future capabilities remain explicitly planned until implementation and validation records are published.",
    ],
    technologies: [
      { name: "Hyper-V — Implemented", category: "platform", description: "Enterprise virtualization foundation hosting the documented laboratory systems." },
      { name: "Windows Server 2025 — Implemented", category: "infrastructure", description: "Server platform supporting the enterprise identity foundation." },
      { name: "Active Directory Domain Services — Operational", category: "security", description: "Centralized identity, authentication, authorization, Organizational Units, users, groups, and administrative boundaries." },
      { name: "Integrated DNS — Operational", category: "infrastructure", description: "Directory-integrated enterprise name resolution." },
      { name: "Windows 11 — Operational", category: "infrastructure", description: "Domain-integrated enterprise endpoint and validated telemetry source." },
      { name: "Splunk Enterprise — Operational", category: "observability", description: "Centralized enterprise monitoring, indexing, search, and dashboard platform." },
      { name: "Splunk Universal Forwarder — Operational", category: "observability", description: "Validated forwarding layer for enterprise Windows telemetry." },
      { name: "SPL Searches — Validated", category: "observability", description: "Searches return indexed authentication, Windows, and infrastructure events." },
      { name: "Operational Dashboards — Implemented", category: "observability", description: "Dashboards provide enterprise telemetry visibility." },
      { name: "PowerShell — Implemented", category: "automation", description: "Supports Windows administration and documented engineering workflows." },
      { name: "GitHub — Operational", category: "platform", description: "Version-controlled architecture and engineering documentation repository." },
      { name: "Markdown Documentation — Operational", category: "platform", description: "Evidence-first engineering records, architecture decisions, and milestones." },
    ],
    timeline: [
      { date: "Jul 22, 2026", title: "Enterprise blueprint complete", description: "MILESTONE-001 — Architecture, standards, and implementation sequencing approved.", status: "complete" },
      { date: "Jul 22, 2026", title: "Enterprise identity infrastructure", description: "MILESTONE-002 — Centralized identity and core domain services established.", status: "complete" },
      { date: "Jul 26, 2026", title: "Engineering platform foundation complete", description: "MILESTONE-003 — Evidence-first publishing and project documentation platform stabilized.", status: "complete" },
      { date: "Jul 30, 2026", title: "Enterprise identity & security foundation complete", description: "MILESTONE-004 — Active Directory, integrated DNS, Splunk Enterprise, centralized logging, searches, and dashboards validated.", status: "complete" },
      { date: "Next", title: "Endpoint and Group Policy engineering", description: "PLANNED — Expand managed endpoints and engineer validated enterprise policy.", status: "planned" },
      { date: "Future", title: "Detection and offensive-security validation", description: "FUTURE — Build detections, threat-hunting workflows, attack simulations, and purple-team operations.", status: "planned" },
    ],
    architecture: {
      summary: "OPERATIONAL — Hyper-V hosts the enterprise Windows systems. RF-DC01 provides Active Directory Domain Services and integrated DNS, RF-WIN11-01 consumes centralized identity and generates endpoint telemetry, and RF-SPLUNK01 provides centralized ingestion, indexing, SPL search, and operational dashboards.",
      nodes: [
        { id: "hyper-v", label: "Enterprise Hyper-V", type: "service", description: "IMPLEMENTED — Virtualization foundation for the documented enterprise systems." },
        { id: "domain-controller", label: "RF-DC01", type: "server", description: "OPERATIONAL — Windows Server 2025 providing Active Directory Domain Services and integrated DNS." },
        { id: "windows-client", label: "RF-WIN11-01", type: "client", description: "OPERATIONAL — Domain-integrated enterprise Windows endpoint and telemetry source." },
        { id: "splunk", label: "RF-SPLUNK01", type: "security", description: "OPERATIONAL — Splunk Enterprise with centralized ingestion, indexing, searches, and dashboards." },
      ],
      connections: [
        { from: "hyper-v", to: "domain-controller", label: "Virtual machine hosting" },
        { from: "hyper-v", to: "windows-client", label: "Virtual machine hosting" },
        { from: "hyper-v", to: "splunk", label: "Virtual machine hosting" },
        { from: "windows-client", to: "domain-controller", label: "Authentication and integrated DNS" },
        { from: "domain-controller", to: "splunk", label: "Identity and Windows telemetry" },
        { from: "windows-client", to: "splunk", label: "Endpoint and Sysmon telemetry" },
      ],
    },
    challenges: [
      { title: "Scalable identity design", context: "RESOLVED — The directory structure needed to support future systems without premature complexity.", resolution: "Implemented documented Organizational Units, users, groups, service-account structure, and administrative boundaries before expansion." },
      { title: "Reliable enterprise telemetry", context: "RESOLVED — Monitoring required consistent collection, indexing, and retrieval rather than installation status alone.", resolution: "Validated Universal Forwarder communication, indexed events, SPL searches, and operational dashboards before declaring the platform operational." },
      { title: "Evidence without sensitive disclosure", context: "ONGOING CONTROL — Source screenshots contain internal identifiers and infrastructure details.", resolution: "Keep images outside the public asset pipeline until security, privacy, provenance, and redaction review are complete." },
    ],
    lessonsLearned: [
      { title: "Identity precedes dependent services", insight: "Centralized identity and integrated DNS created the stable foundation required for enterprise administration and monitoring." },
      { title: "Visibility precedes detection", insight: "Reliable collection, indexing, and search must be validated before detection engineering begins." },
      { title: "Architecture should anticipate growth", insight: "Organizational boundaries and index design reduce future restructuring while avoiding unnecessary initial complexity." },
      { title: "Evidence governs completion", insight: "A system is not represented as operational until its implementation and validation are documented in reviewed engineering records." },
    ],
    gallery: [
      ...enterpriseHomeLabEvidence,
      ...base.gallery
        .filter((image) => image.src)
        .map((image) => ({
          ...image,
          evidenceType: "conceptual" as const,
          publicationStatus: "reviewed" as const,
        })),
    ],
    videos: [],
    codeExamples: [],
    futureRoadmap: [
      "PLANNED — Expand enterprise endpoint engineering.",
      "PLANNED — Engineer and validate Group Policy.",
      "PLANNED — Develop detection logic and correlation searches.",
      "PLANNED — Establish repeatable threat-hunting workflows.",
      "FUTURE — Conduct authorized attack simulation and purple-team operations.",
      "FUTURE — Expand automation and operational reporting.",
      "FUTURE — Integrate controlled cloud services.",
    ],
  };
}

interface OperationalProjectInput {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  phase: string;
  technologies: readonly Technology[];
  validation: Project["validation"];
  engineeringRecords: Project["engineeringRecords"];
  objectives: Project["objectives"];
  overview: Project["overview"];
  architecture: Project["architecture"];
  lessonsLearned: Project["lessonsLearned"];
  futureRoadmap: Project["futureRoadmap"];
  relatedProjectSlugs: Project["relatedProjectSlugs"];
  gallery: Project["gallery"];
}

function operationalProject(input: OperationalProjectInput): Project {
  return {
    slug: input.slug,
    title: input.title,
    subtitle: input.subtitle,
    summary: input.summary,
    status: "complete",
    phase: input.phase,
    updatedAt: "2026-07-30",
    duration: "Ongoing",
    role: "Infrastructure and Security Engineer",
    snapshot: { startDate: "July 2026", operationalSystems: "Operational platform", validationStatus: "Validated" },
    validation: input.validation,
    engineeringRecords: input.engineeringRecords,
    objectives: input.objectives,
    overview: input.overview,
    technologies: input.technologies,
    timeline: [
      { date: "Jul 30, 2026", title: `${input.title} operational`, description: "Implementation and validation are documented in the linked Engineering Records.", status: "complete" },
      { date: "Next", title: "Capability expansion", description: input.futureRoadmap[0], status: "planned" },
    ],
    architecture: input.architecture,
    challenges: [],
    lessonsLearned: input.lessonsLearned,
    gallery: input.gallery,
    videos: [],
    codeExamples: [],
    downloads: [],
    certifications: [],
    futureRoadmap: input.futureRoadmap,
    relatedProjectSlugs: input.relatedProjectSlugs,
  };
}

export const enterpriseActiveDirectory = operationalProject({
  slug: "active-directory-lab",
  title: "Enterprise Active Directory",
  subtitle: "Operational enterprise identity services, integrated DNS, and centralized administration.",
  summary: "OPERATIONAL — Enterprise identity platform implementing Active Directory Domain Services, integrated DNS, Organizational Units, users, groups, administrative boundaries, and centralized authentication.",
  phase: "Operational Foundation",
  technologies: [
    { name: "Windows Server 2025 — Operational", category: "infrastructure" },
    { name: "Active Directory Domain Services — Operational", category: "security" },
    { name: "Integrated DNS — Operational", category: "infrastructure" },
    { name: "PowerShell — Implemented", category: "automation" },
  ],
  validation: [
    { label: "Enterprise forest and domain controller operational.", status: "verified" },
    { label: "Active Directory Domain Services and integrated DNS operational.", status: "verified" },
    { label: "Organizational Unit, user, group, and administrative structures validated.", status: "verified" },
  ],
  engineeringRecords: [foundationRecords[1], foundationRecords[3]],
  objectives: [
    "IMPLEMENTED — Centralize enterprise identity, authentication, and authorization.",
    "IMPLEMENTED — Provide integrated enterprise DNS.",
    "IMPLEMENTED — Establish scalable Organizational Units, users, groups, and administrative boundaries.",
    "PLANNED — Expand endpoint integration and Group Policy engineering.",
  ],
  overview: [
    "Enterprise Active Directory provides the centralized identity and administrative foundation for Project RedForge.",
    "The verified implementation includes Active Directory Domain Services, integrated DNS, Organizational Units, users, groups, and separated administrative boundaries.",
  ],
  architecture: {
    summary: "OPERATIONAL — RF-DC01 provides centralized directory, authentication, authorization, and integrated DNS services to domain-integrated systems.",
    nodes: [
      { id: "rf-dc01", label: "RF-DC01", type: "server", description: "Windows Server 2025 domain controller and integrated DNS server." },
      { id: "directory", label: "Active Directory Domain Services", type: "service", description: "Centralized enterprise identity and administration." },
      { id: "dns", label: "Integrated DNS", type: "service", description: "Directory-integrated enterprise name resolution." },
    ],
    connections: [
      { from: "rf-dc01", to: "directory", label: "Hosts directory services" },
      { from: "rf-dc01", to: "dns", label: "Hosts integrated DNS" },
    ],
  },
  lessonsLearned: [
    { title: "Design administrative boundaries early", insight: "A scalable OU and group structure reduces future directory rework." },
    { title: "Identity depends on DNS", insight: "Integrated name resolution must be validated as part of the identity platform." },
  ],
  futureRoadmap: [
    "PLANNED — Expand domain-integrated endpoints.",
    "PLANNED — Engineer and validate Group Policy.",
    "FUTURE — Add identity resilience and recovery validation.",
  ],
  relatedProjectSlugs: ["enterprise-home-lab", "splunk-detection-lab"],
  gallery: activeDirectoryEvidence,
});

export const enterpriseSecurityMonitoring = operationalProject({
  slug: "splunk-detection-lab",
  title: "Enterprise Security Monitoring",
  subtitle: "Operational centralized monitoring, indexed telemetry, enterprise search, and dashboards.",
  summary: "OPERATIONAL — Centralized enterprise monitoring platform implementing Splunk Enterprise, Universal Forwarders, indexed telemetry, operational dashboards, Windows logging, authentication monitoring, and validated SPL searches.",
  phase: "Operational Monitoring",
  technologies: [
    { name: "Splunk Enterprise — Operational", category: "observability" },
    { name: "Universal Forwarders — Operational", category: "observability" },
    { name: "SPL — Validated", category: "observability" },
    { name: "Windows Logging — Operational", category: "security" },
  ],
  validation: [
    { label: "Splunk Enterprise and enterprise indexes operational.", status: "verified" },
    { label: "Universal Forwarder communication and event ingestion validated.", status: "verified" },
    { label: "SPL searches return indexed enterprise events.", status: "verified" },
    { label: "Operational dashboards display enterprise telemetry.", status: "verified" },
    { label: "Detection engineering remains planned.", status: "planned" },
  ],
  engineeringRecords: [foundationRecords[2], foundationRecords[3]],
  objectives: [
    "IMPLEMENTED — Centralize Windows, authentication, endpoint, and infrastructure telemetry.",
    "IMPLEMENTED — Validate forwarding, indexing, SPL retrieval, and dashboard visibility.",
    "PLANNED — Develop enterprise detections and correlation searches.",
    "FUTURE — Support threat hunting, incident analysis, and attack-simulation validation.",
  ],
  overview: [
    "Enterprise Security Monitoring provides the centralized visibility layer for Project RedForge.",
    "Splunk Enterprise receives telemetry through Universal Forwarders, organizes indexed data, supports validated SPL searches, and presents operational dashboards. Detection content remains a governed future phase.",
  ],
  architecture: {
    summary: "OPERATIONAL — Universal Forwarders collect enterprise Windows telemetry and send it to RF-SPLUNK01 for indexing, SPL search, and dashboard visualization.",
    nodes: [
      { id: "forwarders", label: "Universal Forwarders", type: "service", description: "Operational collection and forwarding layer." },
      { id: "rf-splunk01", label: "RF-SPLUNK01", type: "security", description: "Splunk Enterprise monitoring, indexing, and search platform." },
      { id: "dashboards", label: "Operational Dashboards", type: "service", description: "Validated enterprise telemetry visualization." },
    ],
    connections: [
      { from: "forwarders", to: "rf-splunk01", label: "Centralized telemetry ingestion" },
      { from: "rf-splunk01", to: "dashboards", label: "Indexed search and visualization" },
    ],
  },
  lessonsLearned: [
    { title: "Visibility precedes detection", insight: "Collection, indexing, and retrieval must be reliable before detections can be trusted." },
    { title: "Validate each telemetry layer", insight: "Forwarder communication, event ingestion, SPL results, and dashboards require independent verification." },
  ],
  futureRoadmap: [
    "PLANNED — Expand enterprise data-source coverage.",
    "PLANNED — Engineer and validate detection logic.",
    "PLANNED — Establish threat-hunting workflows.",
    "FUTURE — Validate monitoring through authorized attack simulation.",
  ],
  relatedProjectSlugs: ["enterprise-home-lab", "active-directory-lab", "threat-hunting"],
  gallery: securityMonitoringEvidence,
});
