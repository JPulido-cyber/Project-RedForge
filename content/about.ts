export interface TechnicalFocusGroup {
  icon: string;
  title: string;
  purpose: string;
  disciplines: readonly string[];
}

export const aboutContent = {
  hero: {
    eyebrow: "Engineer profile",
    title: "The Engineer Behind RedForge",
    description:
      "Military leadership, disciplined enterprise engineering, and a deliberate transition toward offensive cybersecurity.",
  },
  profile: {
    name: "Jose Pulido",
    identity: "Offensive Security Engineering",
    details: [
      ["Background", "13 years U.S. Army leadership"],
      ["Education", "B.S. Cyber Security"],
      ["Engineering platform", "Project RedForge"],
    ],
    statement: ["Build.", "Understand.", "Secure.", "Assess."],
  },
  journey: {
    eyebrow: "Leadership to engineering",
    title: "How I got here",
    paragraphs: [
      "My transition into cybersecurity was shaped by a career of accountability, preparation, and leadership under pressure. Those habits now guide how I approach technical work: understand the mission, reduce assumptions, validate the result, and document what others need to reproduce.",
    ],
  },
  path: {
    eyebrow: "Why this path",
    title: "Why offensive security",
    paragraphs: [
      "Offensive security is most effective when it begins with operational understanding. Assessing an enterprise environment requires more than familiarity with tools; it requires knowing how identity, infrastructure, networking, administration, and defensive visibility are designed to work together.",
      "Building the environment is deliberate preparation for assessing it. Breadth is being developed in service of focused offensive depth—not as an end in itself.",
    ],
  },
  philosophy: {
    eyebrow: "Engineering philosophy",
    title: "Engineering philosophy",
    displayTitle: "How I approach the work",
    paragraphs: [
      "Evidence-based, repeatable engineering creates the operational context required for credible assessment.",
    ],
    principles: [
      "Understand systems before assessing them.",
      "Validate complete workflows, not isolated installations.",
      "Document decisions so engineering can be reproduced.",
      "Improve the platform through reviewed evidence.",
    ],
  },
  focus: [
    {
      icon: "▤",
      title: "Enterprise foundations",
      purpose: "Understand enterprise infrastructure and dependencies before assessment.",
      disciplines: ["Windows", "Linux", "Networking", "Virtualization", "Active Directory", "DNS", "Group Policy"],
    },
    {
      icon: "◎",
      title: "Visibility & detection",
      purpose: "Understand what defenders can observe, investigate, and validate.",
      disciplines: ["Splunk", "Sysmon", "Windows Logging", "Telemetry", "Threat Hunting", "Detection Engineering"],
    },
    {
      icon: "⌘",
      title: "Automation & tooling",
      purpose: "Create repeatable engineering, analysis, and offensive workflows.",
      disciplines: ["Python", "PowerShell", "Git", "Automation"],
    },
    {
      icon: "◇",
      title: "Modern enterprise",
      purpose: "Understand modern enterprise identity, infrastructure, and cloud visibility.",
      disciplines: ["Cloud", "IAM", "Cloud Logging", "Microsoft Entra ID — Future"],
    },
  ] satisfies readonly TechnicalFocusGroup[],
} as const;
