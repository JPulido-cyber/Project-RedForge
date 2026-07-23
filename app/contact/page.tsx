import type { Metadata } from "next";

import { PlatformShell, Section } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Professional contact channels for Project RedForge.",
};

export default function ContactPage() {
  return (
    <PlatformShell>
      <Section className="contact-hero">
        <div><p className="technical-eyebrow">Build something secure</p><h1>Get in Touch</h1><p>For professional opportunities, engineering collaboration, or questions about published RedForge work.</p></div>
        <div className="platform-hero-grid" aria-hidden />
      </Section>
      <Section className="contact-grid">
        <article className="forged-panel contact-card"><p className="technical-eyebrow">Contact</p><h2>Professional channels</h2><a href="mailto:j.pulido.cyber@outlook.com">j.pulido.cyber@outlook.com</a><a href="https://github.com/RedForge-Engineer" rel="noreferrer" target="_blank">GitHub / RedForge-Engineer</a><p>No phone number, home address, infrastructure endpoint, or private operational detail is published.</p></article>
        <article className="forged-panel contact-card" id="resume"><p className="technical-eyebrow">Resume</p><h2>Evidence-first profile</h2><p>The operator dossier summarizes the current mission, engineering focus, skills, and verified professional narrative.</p><a className="command-action" href="/about">View operator profile <span aria-hidden>→</span></a></article>
        <article className="forged-panel contact-card"><p className="technical-eyebrow">Response model</p><h2>Direct and intentional</h2><p>This site does not collect contact-form submissions. Use the professional email channel so communication remains explicit and private.</p></article>
      </Section>
    </PlatformShell>
  );
}
