import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OperationsSection } from "./operations-section";

const meta = {
  title: "Homepage/Operations/OperationsSection",
  component: OperationsSection,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof OperationsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveOperation: Story = {};
