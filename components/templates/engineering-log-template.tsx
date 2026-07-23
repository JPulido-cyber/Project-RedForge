import type { ReactNode } from "react";

import { ContentPageTemplate } from "./content-page-template";

export interface EngineeringLogTemplateProps {
  children: ReactNode;
  date: string;
  description?: ReactNode;
  title: ReactNode;
}

export function EngineeringLogTemplate({
  children,
  date,
  description,
  title,
}: EngineeringLogTemplateProps) {
  return (
    <ContentPageTemplate
      eyebrow="Engineering log"
      title={title}
      description={description}
      metadata={<time dateTime={date}>{date}</time>}
    >
      {children}
    </ContentPageTemplate>
  );
}
