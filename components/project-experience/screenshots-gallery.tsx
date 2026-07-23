import type { Project } from "@/content/projects";
import Image from "next/image";

export function ScreenshotsGallery({ images }: { images: Project["gallery"] }) {
  return (
    <div className="project-subsection">
      <h3>Screenshot Gallery</h3>
      <div className="screenshot-grid">
        {images.map((image, index) => (
          <figure key={`${image.alt}-${index}`}>
            {image.src ? <a href={image.src} aria-label={`Open ${image.alt}`}><Image src={image.src} alt={image.alt} width={1200} height={675} /></a> : <div className="media-placeholder" role="img" aria-label={image.alt}><span>EVIDENCE {String(index + 1).padStart(2, "0")}</span></div>}
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
