"use client";

import { useState } from "react";

const professionalEmail = "j.pulido.cyber@outlook.com";

export function ContactActions() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(professionalEmail);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <>
      <a className="contact-email-address" href={`mailto:${professionalEmail}`}>{professionalEmail}</a>
      <div className="contact-primary-actions">
        <a className="contact-action primary" href={`mailto:${professionalEmail}`}>Send Email <span aria-hidden>→</span></a>
        <button className="contact-action" type="button" onClick={copyAddress}>Copy Address</button>
        <a className="contact-action" href="https://www.linkedin.com/in/jose-pulido-5887723a5" rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden>↗</span></a>
      </div>
      <p className="contact-copy-status" aria-live="polite">
        {copyState === "copied" ? "Email address copied." : copyState === "failed" ? "Copy unavailable. Select the address above." : ""}
      </p>
    </>
  );
}
