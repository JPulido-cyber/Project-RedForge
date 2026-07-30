import type { DocumentationEntry } from "./types";
import { generatedDocumentationEntries } from "./generated";
import { documentationTaxonomy } from "./taxonomy";
import { assertValidDocumentationEntries } from "./validate";

export const documentationCategories = documentationTaxonomy.map(({ category }) => category);

export const manualDocumentationEntries = [
  {
    slug: "server-establishment-log",
    title: "RF-DC01 Server Establishment Log",
    summary: "Deployment and initial configuration of the first RedForge domain controller and internal DNS service.",
    category: "Engineering Log",
    status: "Implemented",
    publishingState: "published",
    date: "2026-07-22",
    updatedAt: "2026-07-23",
    objective: "Establish the first Windows Server, deploy Active Directory Domain Services and DNS, create the initial forest structure, and verify centralized identity services.",
    engineeringSummary: [
      "RF-DC01 was deployed as a Windows Server 2025 Standard Evaluation virtual machine on VMware Workstation Pro and promoted as the first domain controller in the RedForge test forest.",
      "Active Directory Domain Services and DNS were installed. The initial organizational structure separates administrative identities, groups, servers, service accounts, and workstations.",
      "Separate privileged and standard accounts and the first role-based security groups were created. Account identifiers and internal network values have been removed from the public record.",
      "The source log records Active Directory Users and Computers access, required organizational units, account separation, security groups, and administrative membership as verified. Screenshot evidence has not yet been approved for publication.",
    ],
    technicalDecisions: [
      { title: "Separate privileged and standard identities", rationale: "Routine user activity and administrative work use different accounts to reduce unnecessary privileged exposure." },
      { title: "Group-based authorization", rationale: "Permissions are assigned through role-based security groups instead of directly to individual users." },
      { title: "Internal directory-integrated DNS", rationale: "The first domain controller provides the internal name-resolution dependency required by Active Directory." },
      { title: "Retain the built-in Computers container", rationale: "A duplicate Computers organizational unit was rejected because the built-in container already existed; the default container was retained and the naming conflict documented." },
    ],
    lessonsLearned: [
      "Virtual-machine firmware and installation media must be verified before operating-system deployment begins.",
      "Built-in directory containers must be accounted for before finalizing the organizational-unit naming plan.",
      "Broad administrative membership can support initial establishment, but future delegation should move toward role-specific permissions.",
      "The deployment record and milestone review should be completed before dependent servers are introduced.",
    ],
    evidence: [
      {
        id: "dc01-configuration-record",
        title: "Sanitized server configuration record",
        description: "Reviewed configuration excerpt. Internal addressing, account identifiers, and sensitive administrative values are redacted.",
        kind: "configuration",
        status: "reviewed",
        language: "yaml",
        content: "server: RF-DC01\nplatform: VMware Workstation Pro\noperatingSystem: Windows Server 2025 Standard Evaluation\nroles:\n  - Active Directory Domain Services\n  - DNS Server\nnetwork:\n  addressing: REDACTED\n  dns: Internal / self-hosted\nidentity:\n  forest: RedForge test forest\n  privilegeModel: Separate administrative and standard identities",
      },
      {
        id: "dc01-validation-record",
        title: "Establishment validation checklist",
        description: "Outcomes recorded in the reviewed engineering and milestone logs.",
        kind: "validation",
        status: "verified",
        checklist: [
          { label: "Windows Server installation completed", state: "recorded" },
          { label: "Active Directory Domain Services installed", state: "passed" },
          { label: "DNS Server installed and operational", state: "passed" },
          { label: "Initial forest and domain created", state: "passed" },
          { label: "Required organizational structure created", state: "passed" },
          { label: "Privileged and standard identities separated", state: "passed" },
          { label: "Role-based security groups created", state: "passed" },
        ],
      },
      {
        id: "dc01-screenshot-evidence",
        title: "Deployment screenshots",
        description: "Real screenshots exist outside the publishing pipeline but have not completed redaction and evidence review.",
        kind: "screenshot",
        status: "pending",
      },
    ],
    nextSteps: [
      "Deploy the first member server using the approved naming and network standards.",
      "Join the member server to the RedForge test domain and validate domain authentication.",
      "Introduce file services with group-based NTFS and share permissions.",
      "Publish redacted deployment screenshots after evidence review.",
      "Plan a second domain controller to address the current identity and DNS single point of failure.",
    ],
    projectSlug: "enterprise-home-lab",
    tags: ["Windows Server", "Active Directory", "DNS", "Identity", "RBAC"],
    source: {
      label: "ENG-002 — Active Directory Deployment",
      reviewed: true,
      redactions: ["Internal IPv4 addressing", "Named account identifiers", "Administrative membership details"],
    },
  },
  {
    slug: "milestone-001-enterprise-blueprint",
    title: "Milestone 001 — Enterprise Blueprint Complete",
    summary: "Completion of the reviewed enterprise architecture package before infrastructure implementation.",
    category: "Milestone Log",
    status: "Complete",
    publishingState: "published",
    date: "2026-07-22",
    updatedAt: "2026-07-23",
    objective: "Define the business, infrastructure, network, identity, security, operations, and documentation standards required to begin implementation with a controlled engineering baseline.",
    engineeringSummary: [
      "Phase 1 prioritized architecture and documentation before infrastructure deployment. The resulting blueprint defines the intended business structure, virtual-machine inventory, naming standards, network and identity design, security baseline, operational strategies, and documentation governance.",
      "The knowledge base was organized into stable domains for business, infrastructure, network, Active Directory, security, operations, build logs, and standards.",
      "A structured review found missing documentation standards and file-services design records. Both gaps were resolved before the phase was approved for implementation.",
    ],
    technicalDecisions: [
      { title: "Documentation before implementation", rationale: "A reviewed baseline reduces dependency ambiguity and preserves the reasoning behind future changes." },
      { title: "Infrastructure before security; security before scale", rationale: "Stable core services are required before meaningful controls, monitoring, validation, or expansion." },
      { title: "Role-based access control", rationale: "Identity and resource access should scale through groups and roles instead of direct user permissions." },
      { title: "Modular Group Policy design", rationale: "Focused policies are easier to test, troubleshoot, and change than broad monolithic configurations." },
    ],
    lessonsLearned: [
      "Planning clarified system dependencies and implementation order before deployment risk was introduced.",
      "Consistent document structure made the knowledge base easier to review and extend.",
      "Formal review exposed missing design artifacts early enough to correct them without implementation rework.",
    ],
    evidence: [
      {
        id: "blueprint-deliverables",
        title: "Blueprint deliverable review",
        description: "The milestone record documents completed architecture deliverables across all planned design domains.",
        kind: "validation",
        status: "verified",
        checklist: [
          { label: "Enterprise overview and roadmap", state: "passed" },
          { label: "VM inventory, naming, file services, and build roadmap", state: "passed" },
          { label: "Network topology, addressing, DNS, and DHCP design", state: "passed" },
          { label: "Domain, OU, account, group, and Group Policy design", state: "passed" },
          { label: "Security baseline", state: "passed" },
          { label: "Backup, disaster recovery, and monitoring strategies", state: "passed" },
          { label: "Documentation standards", state: "passed" },
        ],
      },
      {
        id: "blueprint-architecture",
        title: "Enterprise Home Lab logical architecture",
        description: "Conceptual target-state diagram. It documents design intent and is not deployment evidence.",
        kind: "architecture",
        status: "conceptual",
        src: "/projects/enterprise-home-lab/diagrams/logical-architecture.svg",
        alt: "Target-state logical architecture for the Enterprise Home Lab",
      },
    ],
    nextSteps: [
      "Use the blueprint to govern core infrastructure deployment.",
      "Record each implementation change in an engineering log.",
      "Validate identity and network dependencies before adding member systems.",
      "Maintain milestone records as implementation phases complete.",
    ],
    projectSlug: "enterprise-home-lab",
    tags: ["Architecture", "Governance", "Planning", "Documentation"],
    source: {
      label: "Milestone-001 — Enterprise Blueprint Complete",
      reviewed: true,
      redactions: [],
    },
  },
] as const satisfies readonly DocumentationEntry[];

export const documentationEntries = generatedDocumentationEntries;
export const legacyDocumentationEntries = manualDocumentationEntries.filter(
  (entry) => entry.slug === "server-establishment-log",
);
export const documentationRouteEntries = [
  ...documentationEntries,
  ...legacyDocumentationEntries,
] as const satisfies readonly DocumentationEntry[];

export function getDocumentationEntry(slug: string) {
  return documentationRouteEntries.find((entry) => entry.slug === slug);
}

assertValidDocumentationEntries(documentationEntries);
assertValidDocumentationEntries(documentationRouteEntries);
