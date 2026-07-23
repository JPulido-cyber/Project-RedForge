import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CaseStudyTemplate } from "./case-study-template";
import { DocumentationPageTemplate } from "./documentation-page-template";
import { EngineeringLogTemplate } from "./engineering-log-template";
import { LabDocumentationTemplate } from "./lab-documentation-template";
import { ProjectPageTemplate } from "./project-page-template";

const meta = {
  title: "Templates/Content Pages",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent = (
  <div className="space-y-4 text-text">
    <h2 className="text-2xl font-semibold">Overview</h2>
    <p className="leading-7 text-text-muted">
      Templates provide consistent structure while leaving content composition to
      each route.
    </p>
  </div>
);

export const ProjectPage: Story = {
  render: () => (
    <ProjectPageTemplate
      title="Infrastructure observability"
      description="A representative project page shell."
      status="active"
    >
      {sampleContent}
    </ProjectPageTemplate>
  ),
};

export const DocumentationPage: Story = {
  render: () => (
    <DocumentationPageTemplate
      title="Network operations"
      description="Reference documentation for operating RedForge systems."
      navigation={<nav aria-label="On this page">On this page</nav>}
    >
      {sampleContent}
    </DocumentationPageTemplate>
  ),
};

export const EngineeringLog: Story = {
  render: () => (
    <EngineeringLogTemplate
      title="Establishing the platform foundation"
      date="2026-07-23"
    >
      {sampleContent}
    </EngineeringLogTemplate>
  ),
};

export const LabDocumentation: Story = {
  render: () => (
    <LabDocumentationTemplate
      title="Segment a lab network"
      difficulty="intermediate"
    >
      {sampleContent}
    </LabDocumentationTemplate>
  ),
};

export const CaseStudy: Story = {
  render: () => (
    <CaseStudyTemplate
      title="Reducing operational ambiguity"
      description="A reusable future case-study shell."
      outcome="Clear system ownership and faster diagnosis."
    >
      {sampleContent}
    </CaseStudyTemplate>
  ),
};
