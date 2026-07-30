const reviewed = (id, title, description, src, alt) => ({
  id,
  title,
  description,
  kind: "screenshot",
  status: "reviewed",
  src,
  alt,
});

export const reviewedEvidenceByRecord = new Map([
  ["ENG-013", [
    reviewed("eng-013-forest", "Enterprise forest and domain", "Reviewed Active Directory Domains and Trusts evidence showing the operational RedForge enterprise forest.", "/evidence/active-directory/forest-and-domain.png", "Active Directory Domains and Trusts showing the RedForge enterprise test forest"),
    reviewed("eng-013-organizational-units", "Organizational Unit structure", "Reviewed directory evidence showing the implemented enterprise administrative hierarchy.", "/evidence/active-directory/organizational-unit-structure.png", "Active Directory Users and Computers showing the RedForge organizational unit hierarchy"),
    reviewed("eng-013-group-policy", "Group Policy implementation", "Reviewed Group Policy Management evidence showing implemented baseline and workstation policies.", "/evidence/active-directory/group-policy-objects.png", "Group Policy Management showing the implemented RedForge policy objects"),
    reviewed("eng-013-dns", "Directory-integrated DNS", "Reviewed DNS Manager evidence showing records for the operational enterprise systems.", "/evidence/active-directory/integrated-dns-records.png", "DNS Manager showing directory-integrated records for the RedForge test domain"),
  ]],
  ["ENG-014", [
    reviewed("eng-014-platform", "Splunk Enterprise platform", "Reviewed application evidence showing the operational Splunk Enterprise environment.", "/evidence/security-monitoring/splunk-enterprise-home.png", "Splunk Enterprise home view showing installed enterprise applications"),
    reviewed("eng-014-indexes", "Enterprise index inventory", "Reviewed index-management evidence showing purpose-built indexes and indexed event counts.", "/evidence/security-monitoring/enterprise-indexes.png", "Splunk Enterprise index management showing RedForge indexes and indexed events"),
    reviewed("eng-014-inputs", "Telemetry data inputs", "Reviewed configuration evidence showing the telemetry inputs used by the monitoring platform.", "/evidence/security-monitoring/data-inputs.png", "Splunk Enterprise data input configuration for Windows and infrastructure telemetry"),
    reviewed("eng-014-search", "Indexed Windows and Sysmon events", "Reviewed SPL evidence showing searchable Windows and Sysmon telemetry from RF-DC01.", "/evidence/security-monitoring/indexed-event-search.png", "Splunk Search and Reporting showing indexed Windows and Sysmon events from RF-DC01"),
    reviewed("eng-014-sysmon", "Sysmon process telemetry", "Reviewed SPL evidence showing a validated Sysmon process-event search.", "/evidence/security-monitoring/sysmon-process-search.png", "Splunk Search and Reporting showing a validated Sysmon process-event search"),
  ]],
]);
