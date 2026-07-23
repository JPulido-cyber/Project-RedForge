import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { documentationEntries, type EvidenceItem } from "@/content/documentation";

import { EvidenceRenderer } from "./evidence-renderer";

const evidence: readonly EvidenceItem[] = documentationEntries.flatMap((entry) => [...entry.evidence]);

const meta = {
  title: "Documentation/Evidence/EvidenceRenderer",
  component: EvidenceRenderer,
  args: { items: evidence },
  decorators: [(Story) => <div className="platform-page evidence-story-frame"><Story /></div>],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EvidenceRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewedEvidenceStates: Story = {};
export const PendingScreenshot: Story = {
  args: { items: evidence.filter((item) => item.kind === "screenshot") },
};
export const ValidationChecklists: Story = {
  args: { items: evidence.filter((item) => item.kind === "validation") },
};
export const ConceptualArchitecture: Story = {
  args: { items: evidence.filter((item) => item.kind === "architecture") },
};
