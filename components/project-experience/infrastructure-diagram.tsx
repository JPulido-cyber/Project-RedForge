import type { Project } from "@/content/projects";

export function InfrastructureDiagram({ architecture }: { architecture: Project["architecture"] }) {
  if (!architecture.nodes.length) return <p className="project-empty-state">Architecture nodes will be published after discovery.</p>;
  return (
    <details className="infrastructure-diagram" open>
      <summary>Architecture topology <span>Expand / collapse</span></summary>
      <div className="architecture-node-grid">
        {architecture.nodes.map((node) => (
          <article data-node-type={node.type} key={node.id}>
            <small>{node.type}</small><h3>{node.label}</h3><p>{node.description}</p>
          </article>
        ))}
      </div>
      <ul className="architecture-connections" aria-label="Architecture connections">
        {architecture.connections.map((connection) => <li key={`${connection.from}-${connection.to}`}><code>{connection.from}</code><span>&rarr; {connection.label} &rarr;</span><code>{connection.to}</code></li>)}
      </ul>
    </details>
  );
}
