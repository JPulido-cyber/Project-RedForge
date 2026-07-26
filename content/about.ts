export interface TechnicalFocusGroup {
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
    title: "From leadership to engineering",
    paragraphs: [
      "My transition into cybersecurity builds on a military career shaped by accountability, preparation, and leadership under pressure. Those habits now guide how I approach technical work: understand the mission, reduce assumptions, validate the result, and document what others need to reproduce it.",
      "RedForge turns that transition into visible engineering practice. Instead of presenting a list of tools, the platform records how systems are designed, established, secured, monitored, tested, and improved over time.",
    ],
  },
  path: {
    title: "Why this path",
    paragraphs: [
      "Offensive security is most effective when it begins with operational understanding. Assessing an enterprise environment requires more than familiarity with tools; it requires knowing how identity, infrastructure, networking, administration, and defensive visibility are designed to work together.",
      "Building enterprise environments is therefore intentional preparation. It develops the context needed to identify meaningful weaknesses, understand their operational impact, communicate defensible findings, and recommend improvements that work within real systems.",
    ],
  },
  philosophy: {
    title: "Engineering philosophy",
    paragraphs: [
      "Strong offensive work begins with understanding how enterprise systems are intended to function. Learning to build, operate, secure, monitor, and recover those systems makes assessment findings more accurate, practical, and defensible.",
      "The work should also be evidence-based and repeatable. RedForge records objectives, decisions, implementation, validation, challenges, lessons, and next steps so progress can be reviewed instead of merely claimed.",
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
      title: "Enterprise foundations",
      purpose: "Understand enterprise infrastructure and dependencies before assessment.",
      disciplines: ["Windows", "Linux", "Networking", "Virtualization", "Active Directory", "DNS", "Group Policy"],
    },
    {
      title: "Visibility & detection",
      purpose: "Understand what defenders can observe, investigate, and validate.",
      disciplines: ["Splunk", "Sysmon", "Windows Logging", "Telemetry", "Threat Hunting", "Detection Engineering"],
    },
    {
      title: "Automation & tooling",
      purpose: "Create repeatable engineering, analysis, and offensive workflows.",
      disciplines: ["Python", "PowerShell", "Git", "Automation"],
    },
    {
      title: "Modern enterprise",
      purpose: "Understand modern enterprise identity, infrastructure, and cloud visibility.",
      disciplines: ["Cloud", "IAM", "Cloud Logging", "Microsoft Entra ID — Future"],
    },
  ] satisfies readonly TechnicalFocusGroup[],
} as const;
