import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EngineeringPhilosophy } from "./engineering-philosophy";
import { PlatformPathways } from "./platform-pathways";

const meta = {
  title: "Homepage/Platform Narrative",
  component: EngineeringPhilosophy,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <main className="home-page">
        <Story />
      </main>
    ),
  ],
} satisfies Meta<typeof EngineeringPhilosophy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Philosophy: Story = {};

export const Pathways: Story = {
  render: () => <PlatformPathways />,
};
