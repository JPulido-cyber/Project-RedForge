import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { documentationEntries } from "@/content/documentation";

import { DocumentationReport } from "./documentation-report";

const meta = {
  title: "Documentation/Reports/DocumentationReport",
  component: DocumentationReport,
  args: { entry: documentationEntries[0] },
  decorators: [(Story) => <div className="platform-page"><Story /></div>],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof DocumentationReport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ServerEstablishmentLog: Story = {};
export const MilestoneLog: Story = { args: { entry: documentationEntries[1] } };
