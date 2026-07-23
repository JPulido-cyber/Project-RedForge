import { EvidenceStatusBadge } from "./evidence-status-badge";

interface TerminalOutputProps {
  title: string;
  content: string;
  status?: "verified" | "reviewed";
}

export function TerminalOutput({ title, content, status = "reviewed" }: TerminalOutputProps) {
  return (
    <figure className="terminal-evidence">
      <figcaption><span>{title}</span><EvidenceStatusBadge status={status} /></figcaption>
      <pre><code>{content}</code></pre>
    </figure>
  );
}
