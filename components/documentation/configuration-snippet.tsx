import { EvidenceStatusBadge } from "./evidence-status-badge";

interface ConfigurationSnippetProps {
  title: string;
  language: string;
  content: string;
}

export function ConfigurationSnippet({ title, language, content }: ConfigurationSnippetProps) {
  return (
    <figure className="configuration-evidence">
      <figcaption>
        <span>{title}</span>
        <span>{language}</span>
        <EvidenceStatusBadge status="reviewed" />
      </figcaption>
      <pre><code>{content}</code></pre>
    </figure>
  );
}
