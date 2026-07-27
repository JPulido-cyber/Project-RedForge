import type { Metadata } from "next";

import { ContactActions } from "@/components/contact";
import { PlatformShell, Section } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Professional contact channels for Project RedForge.",
};

export default function ContactPage() {
  return (
    <PlatformShell>
      <Section className="contact-hero">
        <div>
          <p className="technical-eyebrow">Build something secure</p>
          <h1>Get in Touch</h1>
          <p>For professional opportunities, engineering collaboration, or questions about published RedForge work.</p>
        </div>
        <div className="platform-hero-grid" aria-hidden />
      </Section>

      <Section className="contact-experience">
        <article className="contact-primary-panel">
          <p className="technical-eyebrow">Professional contact</p>
          <h2>Start a Conversation</h2>
          <p>For cybersecurity opportunities, engineering collaboration, or questions about Project RedForge.</p>
          <ContactActions />
        </article>

        <nav className="contact-professional-links" id="resume" aria-label="Professional links">
          <div><p className="technical-eyebrow">Professional links</p><h2>Direct Channels</h2></div>
          <div>
            <a href="https://www.linkedin.com/in/jose-pulido-5887723a5" rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden>↗</span></a>
            <a href="https://github.com/JPulido-cyber" rel="noopener noreferrer" target="_blank">GitHub <span aria-hidden>↗</span></a>
            <a href="/about">Resume / Profile <span aria-hidden>→</span></a>
          </div>
        </nav>

        <aside className="contact-response-panel" aria-labelledby="response-window-title">
          <div><p className="technical-eyebrow">Availability</p><h2 id="response-window-title">Response Window</h2></div>
          <div>
            <p>Professional inquiries are typically answered within 1–2 business days.</p>
            <p>Do not submit classified, proprietary, sensitive operational, or protected personal information.</p>
          </div>
        </aside>
      </Section>
    </PlatformShell>
  );
}
