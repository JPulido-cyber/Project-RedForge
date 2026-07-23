import type { Project } from "@/content/projects";

export function CodeExamples({ examples }: { examples: Project["codeExamples"] }) {
  if (!examples.length) return null;
  return (
    <div className="project-subsection"><h3>Code Examples</h3>{examples.map((example) => <article className="code-example" key={example.title}><header><div><h4>{example.title}</h4><p>{example.description}</p></div><span>{example.language}</span></header><pre tabIndex={0}><code>{example.code}</code></pre></article>)}</div>
  );
}
