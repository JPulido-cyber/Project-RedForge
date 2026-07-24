import { EvidenceStatusBadge } from "./evidence-status-badge";

interface ConfigurationSnippetProps {
  title: string;
  language: string;
  content: string;
  description?: string;
}

export function ConfigurationSnippet({ title, language, content, description }: ConfigurationSnippetProps) {
  return (
    <figure className="configuration-evidence">
      <figcaption>
        <span>{title}</span>
        <span>{language}</span>
        <EvidenceStatusBadge status="reviewed" />
      </figcaption>
      {description ? <p className="evidence-description">{description}</p> : null}
      <pre><code>{content}</code></pre>
    </figure>
  );
}
