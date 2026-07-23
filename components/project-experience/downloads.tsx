import type { Project } from "@/content/projects";

export function Downloads({ assets }: { assets: Project["downloads"] }) {
  if (!assets.length) return null;
  return (
    <div className="project-subsection"><h3>Downloads</h3><div className="asset-list">{assets.map((asset) => <article key={asset.title}><span>{asset.format}</span><div><h4>{asset.title}</h4><p>{asset.description}</p></div>{asset.url ? <a download href={asset.url}>Download</a> : <em>Pending</em>}</article>)}</div></div>
  );
}
