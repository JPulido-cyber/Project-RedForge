import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { projects } from "@/content/projects";
import { ProjectTimeline } from "./project-timeline";

const meta = {
  title: "Projects/Delivery/ProjectTimeline",
  component: ProjectTimeline,
  args: { events: projects[0].timeline },
  decorators: [(Story) => <div className="project-experience"><main className="project-experience-main"><Story /></main></div>],
} satisfies Meta<typeof ProjectTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeliveryPhases: Story = {};
