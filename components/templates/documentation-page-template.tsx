import type { ReactNode } from "react";

import { ContentPageTemplate } from "./content-page-template";

export interface DocumentationPageTemplateProps {
  children: ReactNode;
  description?: ReactNode;
  navigation?: ReactNode;
  title: ReactNode;
}

export function DocumentationPageTemplate({
  children,
  description,
  navigation,
  title,
}: DocumentationPageTemplateProps) {
  return (
    <ContentPageTemplate
      eyebrow="Documentation"
      title={title}
      description={description}
      aside={navigation}
    >
      {children}
    </ContentPageTemplate>
  );
}
