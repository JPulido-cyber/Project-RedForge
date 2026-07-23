import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OperatorSection } from "./operator-section";

const meta = {
  title: "Homepage/Operator/OperatorSection",
  component: OperatorSection,
  args: { hidden: false },
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof OperatorSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dossier: Story = {};
