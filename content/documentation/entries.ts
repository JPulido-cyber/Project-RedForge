import type { DocumentationEntry } from "./types";

export const documentationEntries = [
  {
    slug: "enterprise-home-lab-foundation",
    title: "Enterprise Home Lab Foundation",
    summary: "A review-ready architecture and governance record for the target-state Enterprise Home Lab.",
    category: "Architecture Decision Record",
    state: "review-ready",
    projectSlug: "enterprise-home-lab",
    tags: ["Architecture", "Governance", "Target State"],
  },
  {
    slug: "server-establishment-log",
    title: "Server Establishment Log",
    summary: "Reserved for the reviewed and redacted server establishment record already underway.",
    category: "Engineering Log",
    state: "redaction-pending",
    projectSlug: "enterprise-home-lab",
    tags: ["Server", "Evidence Pending"],
  },
  {
    slug: "network-segmentation-validation",
    title: "Network Segmentation Validation",
    summary: "Planned validation record for approved VLAN boundaries and allowed traffic paths.",
    category: "Validation Record",
    state: "planned",
    projectSlug: "enterprise-home-lab",
    tags: ["Networking", "Validation Pending"],
  },
] as const satisfies readonly DocumentationEntry[];
