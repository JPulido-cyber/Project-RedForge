export interface NavigationItem {
  href: string;
  label: string;
}

export interface MetricItem {
  icon: "directory" | "document" | "forest" | "server" | "shield";
  label: string;
  value: string;
}

export interface ProjectItem {
  description: string;
  href: string;
  icon: string;
  number: string;
  status: "active" | "operational" | "planned";
  tags: readonly string[];
  title: string;
}

export interface EngineeringPrinciple {
  description: string;
  name: string;
}

export interface PlatformPathway {
  description: string;
  href: string;
  label: string;
  title: string;
}

export const homepageContent = {
  navigation: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "LAB ENVIRONMENT", href: "/lab" },
    { label: "PROJECTS", href: "/projects" },
    { label: "DOCUMENTATION", href: "/documentation" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ] satisfies readonly NavigationItem[],
  metrics: [
    { icon: "server", value: "3", label: "OPERATIONAL SYSTEMS" },
    { icon: "forest", value: "1", label: "ACTIVE DIRECTORY FOREST" },
    { icon: "document", value: "14", label: "ENGINEERING LOGS" },
    { icon: "shield", value: "6", label: "ARCHITECTURE DECISIONS" },
    { icon: "directory", value: "4", label: "MILESTONES" },
  ] satisfies readonly MetricItem[],
  principles: [
    {
      name: "Discipline.",
      description:
        "Build from defined objectives, controlled scope, and repeatable engineering practice.",
    },
    {
      name: "Precision.",
      description:
        "Validate the implementation, preserve the evidence, and distinguish verified state from intent.",
    },
    {
      name: "Progress.",
      description:
        "Turn each result, constraint, and lesson into the next deliberate engineering milestone.",
    },
  ] satisfies readonly EngineeringPrinciple[],
  pathways: [
    {
      label: "Current projects",
      title: "Review the engineering program",
      description:
        "See the systems, lifecycle state, validation, and evidence connected to each active project.",
      href: "/projects",
    },
    {
      label: "Documentation",
      title: "Follow the engineering record",
      description:
        "Read the Engineering Logs, Architecture Decision Records, and Milestones behind the platform.",
      href: "/documentation",
    },
    {
      label: "Technical deep dive",
      title: "Explore the verified enterprise",
      description:
        "Inspect the operational topology, implemented services, telemetry relationships, and planned capabilities.",
      href: "/lab",
    },
  ] satisfies readonly PlatformPathway[],
  projects: [
    {
      number: "01",
      icon: "GRID",
      title: "Enterprise Home Lab",
      description:
        "Designing a realistic virtual environment for networking, Windows, Linux, identity, monitoring, and security testing.",
      tags: ["Networking", "Virtualization", "Security"],
      status: "active",
      href: "/projects/enterprise-home-lab",
    },
    {
      number: "02",
      icon: "CLI",
      title: "Python Automation",
      description:
        "Building practical Python tools while developing programming, troubleshooting, and automation fundamentals.",
      tags: ["Python", "Automation", "Git"],
      status: "planned",
      href: "/projects/python-automation",
    },
    {
      number: "03",
      icon: "AD",
      title: "Enterprise Active Directory",
      description:
        "Operating centralized identity, integrated DNS, Organizational Units, users, groups, authentication, and administrative boundaries.",
      tags: ["Windows Server", "Identity", "DNS"],
      status: "operational",
      href: "/projects/active-directory-lab",
    },
    {
      number: "04",
      icon: "SIEM",
      title: "Enterprise Security Monitoring",
      description:
        "Operating Splunk Enterprise, Universal Forwarders, centralized logging, indexed telemetry, SPL searches, and dashboards.",
      tags: ["Splunk", "SIEM", "Monitoring"],
      status: "operational",
      href: "/projects/splunk-detection-lab",
    },
    {
      number: "05",
      icon: "AWS",
      title: "AWS Cloud Security",
      description:
        "Building and securing cloud infrastructure using identity, logging, monitoring, networking, and least-privilege principles.",
      tags: ["AWS", "Cloud", "IAM"],
      status: "planned",
      href: "/projects/aws-security",
    },
    {
      number: "06",
      icon: "TH",
      title: "Threat Hunting",
      description:
        "Developing investigative workflows to identify suspicious activity, analyze evidence, and document defensible conclusions.",
      tags: ["Analysis", "Telemetry", "Defense"],
      status: "planned",
      href: "/projects/threat-hunting",
    },
  ] satisfies readonly ProjectItem[],
} as const;
