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
  snapshot: [
    ["Background", "13 years of U.S. Army leadership"],
    ["Education", "B.S. Cyber Security"],
    ["Current direction", "Offensive cybersecurity engineering"],
    ["Engineering platform", "Project RedForge"],
  ],
  journey: {
    title: "From leadership to engineering",
    paragraphs: [
      "My transition into cybersecurity builds on a military career shaped by accountability, preparation, and leadership under pressure. Those habits now guide how I approach technical work: understand the mission, reduce assumptions, validate the result, and document what others need to reproduce it.",
      "RedForge turns that transition into visible engineering practice. Instead of presenting a list of tools, the platform records how systems are designed, established, secured, monitored, tested, and improved over time.",
    ],
  },
  purpose: {
    title: "Why RedForge exists",
    paragraphs: [
      "RedForge is not a collection of isolated IT exercises. It is an enterprise engineering platform built to develop a working understanding of the environments offensive security professionals are expected to assess.",
      "Building identity, infrastructure, networking, telemetry, automation, and documentation creates the context required to reason about trust boundaries, operational dependencies, defensive visibility, and the consequences of technical decisions.",
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
  mission: {
    title: "Current mission",
    description:
      "Develop broad enterprise engineering capability in service of a focused specialization in offensive cybersecurity. The current work strengthens the infrastructure, identity, telemetry, automation, and documentation knowledge required to assess enterprise environments with technical depth and operational context.",
  },
  focus: [
    {
      title: "Enterprise infrastructure",
      purpose: "Understand the systems, networks, and dependencies that support enterprise operations.",
      disciplines: ["Windows Server", "Networking", "Virtualization", "Linux"],
    },
    {
      title: "Identity",
      purpose: "Develop practical knowledge of authentication, authorization, policy, and administrative boundaries.",
      disciplines: ["Active Directory", "DNS", "Group Policy", "Access Control"],
    },
    {
      title: "Security operations",
      purpose: "Understand the telemetry and defensive workflows that shape detection and investigation.",
      disciplines: ["Splunk", "Sysmon", "Logging", "Threat Hunting"],
    },
    {
      title: "Programming & automation",
      purpose: "Create repeatable engineering and analysis workflows.",
      disciplines: ["Python", "PowerShell", "Git", "Automation"],
    },
    {
      title: "Cloud",
      purpose: "Extend enterprise security thinking into modern identity, infrastructure, and logging models.",
      disciplines: ["Cloud Security", "IAM", "Cloud Logging"],
    },
  ] satisfies readonly TechnicalFocusGroup[],
} as const;
