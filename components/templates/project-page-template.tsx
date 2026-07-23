import type { ReactNode } from "react";

import { Badge } from "@/components/ui";

import { ContentPageTemplate } from "./content-page-template";

export interface ProjectPageTemplateProps {
  children: ReactNode;
  description: ReactNode;
  metadata?: ReactNode;
  status: "planned" | "active" | "complete" | "archived";
  title: ReactNode;
}

export function ProjectPageTemplate({
  children,
  description,
  metadata,
  status,
  title,
}: ProjectPageTemplateProps) {
  return (
    <ContentPageTemplate
      eyebrow="Project"
      title={title}
      description={description}
      metadata={
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={status === "active" ? "success" : "neutral"}>
            {status}
          </Badge>
          {metadata}
        </div>
      }
    >
      {children}
    </ContentPageTemplate>
  );
}
