import type { Project } from "@/content/projects";

export function VideoSection({ videos }: { videos: Project["videos"] }) {
  if (!videos.length) return null;
  return (
    <div className="project-subsection"><h3>Video Documentation</h3><div className="asset-list">{videos.map((video) => <article key={video.title}><span>VIDEO</span><div><h4>{video.title}</h4><p>{video.description}</p></div>{video.url ? <a href={video.url}>Watch</a> : <em>Pending</em>}</article>)}</div></div>
  );
}
