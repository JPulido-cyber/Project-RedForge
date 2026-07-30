import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CurrentProjects } from "./current-projects";
import { EngineeringPhilosophy } from "./engineering-philosophy";

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

export const Projects: Story = {
  render: () => <CurrentProjects />,
};
