import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { projects } from "@/content/projects";
import { ProjectExperience } from "./project-experience";

const meta = {
  title: "Projects/Experience/ProjectExperience",
  component: ProjectExperience,
  args: { project: projects[0] },
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => <div className="platform-page"><Story /></div>,
  ],
} satisfies Meta<typeof ProjectExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveEngineeringReport: Story = {};
export const EnterpriseHomeLabFlagship: Story = {
  name: "Enterprise Home Lab — Flagship report",
  args: { project: projects[0] },
};
export const PlannedProject: Story = { args: { project: projects[1] } };
