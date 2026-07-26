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
    { icon: "server", value: "1", label: "SYSTEM DEPLOYED" },
    { icon: "shield", value: "5", label: "SECURITY GROUPS" },
    { icon: "forest", value: "1", label: "ACTIVE DIRECTORY FOREST" },
    { icon: "document", value: "12", label: "ENGINEERING LOGS" },
    { icon: "directory", value: "1", label: "DOMAIN CONTROLLER" },
  ] satisfies readonly MetricItem[],
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
      status: "active",
      href: "/projects/python-automation",
    },
    {
      number: "03",
      icon: "AD",
      title: "Active Directory Lab",
      description:
        "Deploying and securing a Windows domain with users, groups, policies, authentication, and administrative controls.",
      tags: ["Windows Server", "Identity", "GPO"],
      status: "planned",
      href: "/projects/active-directory-lab",
    },
    {
      number: "04",
      icon: "SIEM",
      title: "Splunk Detection Lab",
      description:
        "Ingesting security data, building dashboards, investigating events, and developing detection and threat-hunting workflows.",
      tags: ["Splunk", "SIEM", "Detection"],
      status: "planned",
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
