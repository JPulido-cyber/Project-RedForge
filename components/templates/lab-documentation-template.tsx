import type { ReactNode } from "react";

import { Badge } from "@/components/ui";

import { ContentPageTemplate } from "./content-page-template";

export interface LabDocumentationTemplateProps {
  children: ReactNode;
  description?: ReactNode;
  difficulty: "introductory" | "intermediate" | "advanced";
  title: ReactNode;
}

export function LabDocumentationTemplate({
  children,
  description,
  difficulty,
  title,
}: LabDocumentationTemplateProps) {
  return (
    <ContentPageTemplate
      eyebrow="Interactive lab"
      title={title}
      description={description}
      metadata={<Badge>{difficulty}</Badge>}
    >
      {children}
    </ContentPageTemplate>
  );
}
