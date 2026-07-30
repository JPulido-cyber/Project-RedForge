import type { GalleryImage } from "@/content/projects/types";

function reviewedImage(src: string, alt: string, caption: string): GalleryImage {
  return {
    src,
    alt,
    caption,
    evidenceType: "implementation",
    publicationStatus: "reviewed",
  };
}

export const activeDirectoryEvidence = [
  reviewedImage("/evidence/active-directory/forest-and-domain.png", "Active Directory Domains and Trusts showing the RedForge enterprise test forest", "REVIEWED IMPLEMENTATION EVIDENCE — The enterprise forest and internal test domain are operational."),
  reviewedImage("/evidence/active-directory/domain-functional-level.png", "Active Directory domain properties showing Windows Server 2025 domain and forest functional levels", "REVIEWED IMPLEMENTATION EVIDENCE — Domain and forest functional levels are configured for Windows Server 2025."),
  reviewedImage("/evidence/active-directory/splunk-computer-account.png", "Active Directory computer container showing the RF-SPLUNK01 enterprise monitoring host", "REVIEWED IMPLEMENTATION EVIDENCE — RF-SPLUNK01 is represented as a managed directory computer object."),
  reviewedImage("/evidence/active-directory/organizational-unit-structure.png", "Active Directory Users and Computers showing the RedForge organizational unit hierarchy", "REVIEWED IMPLEMENTATION EVIDENCE — The directory uses a structured enterprise Organizational Unit hierarchy."),
  reviewedImage("/evidence/active-directory/administrative-ou-structure.png", "Active Directory Users and Computers showing separated administrative organizational units", "REVIEWED IMPLEMENTATION EVIDENCE — Administrative, group, server, service-account, user, and workstation boundaries are separated."),
  reviewedImage("/evidence/active-directory/workstation-computer-account.png", "Active Directory computer container showing the RF-WIN11-01 managed workstation", "REVIEWED IMPLEMENTATION EVIDENCE — RF-WIN11-01 is joined to the enterprise directory."),
  reviewedImage("/evidence/active-directory/group-policy-objects.png", "Group Policy Management showing the implemented RedForge policy objects", "REVIEWED IMPLEMENTATION EVIDENCE — Baseline domain, audit, defender, firewall, and workstation policies are defined."),
  reviewedImage("/evidence/active-directory/workstation-group-policy.png", "Group Policy Management showing workstation policy scope and enforcement", "REVIEWED IMPLEMENTATION EVIDENCE — Workstation security policy is linked and enforced for its intended scope."),
  reviewedImage("/evidence/active-directory/integrated-dns-records.png", "DNS Manager showing directory-integrated records for the RedForge test domain", "REVIEWED IMPLEMENTATION EVIDENCE — Integrated DNS resolves the documented enterprise systems."),
] as const satisfies readonly GalleryImage[];

export const securityMonitoringEvidence = [
  reviewedImage("/evidence/security-monitoring/splunk-enterprise-home.png", "Splunk Enterprise home view showing installed enterprise applications", "REVIEWED IMPLEMENTATION EVIDENCE — The Splunk Enterprise monitoring platform is operational."),
  reviewedImage("/evidence/security-monitoring/enterprise-indexes.png", "Splunk Enterprise index management showing RedForge indexes and indexed events", "REVIEWED IMPLEMENTATION EVIDENCE — Enterprise telemetry is separated into purpose-built indexes and contains events."),
  reviewedImage("/evidence/security-monitoring/data-inputs.png", "Splunk Enterprise data input configuration for Windows and infrastructure telemetry", "REVIEWED IMPLEMENTATION EVIDENCE — Reviewed data inputs support centralized enterprise telemetry collection."),
  reviewedImage("/evidence/security-monitoring/forwarding-receiver.png", "Splunk Enterprise forwarding and receiving configuration", "REVIEWED IMPLEMENTATION EVIDENCE — The Splunk receiver is configured for Universal Forwarder ingestion."),
  reviewedImage("/evidence/security-monitoring/indexed-event-search.png", "Splunk Search and Reporting showing indexed Windows and Sysmon events from RF-DC01", "REVIEWED IMPLEMENTATION EVIDENCE — SPL returns real indexed Windows and Sysmon telemetry from the domain controller."),
  reviewedImage("/evidence/security-monitoring/sysmon-process-search.png", "Splunk Search and Reporting showing a validated Sysmon process-event search", "REVIEWED IMPLEMENTATION EVIDENCE — Sysmon process telemetry is searchable in the centralized monitoring platform."),
] as const satisfies readonly GalleryImage[];

export const enterpriseHomeLabEvidence = [
  activeDirectoryEvidence[0],
  activeDirectoryEvidence[3],
  activeDirectoryEvidence[6],
  activeDirectoryEvidence[8],
  securityMonitoringEvidence[1],
  securityMonitoringEvidence[4],
  securityMonitoringEvidence[5],
] as const satisfies readonly GalleryImage[];
