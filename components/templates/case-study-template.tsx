import type { ReactNode } from "react";

import { ContentPageTemplate } from "./content-page-template";

export interface CaseStudyTemplateProps {
  children: ReactNode;
  description: ReactNode;
  outcome: ReactNode;
  title: ReactNode;
}

export function CaseStudyTemplate({
  children,
  description,
  outcome,
  title,
}: CaseStudyTemplateProps) {
  return (
    <ContentPageTemplate
      eyebrow="Case study"
      title={title}
      description={description}
      aside={
        <section aria-labelledby="case-study-outcome">
          <h2 id="case-study-outcome" className="font-semibold text-text">
            Outcome
          </h2>
          <div className="mt-3 text-sm leading-6 text-text-muted">{outcome}</div>
        </section>
      }
    >
      {children}
    </ContentPageTemplate>
  );
}
