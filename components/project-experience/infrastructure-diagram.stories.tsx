import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { projects } from "@/content/projects";
import { InfrastructureDiagram } from "./infrastructure-diagram";

const meta = {
  title: "Projects/Architecture/InfrastructureDiagram",
  component: InfrastructureDiagram,
  args: { architecture: projects[0].architecture },
  decorators: [(Story) => <div className="project-experience p-10"><Story /></div>],
} satisfies Meta<typeof InfrastructureDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {};
export const Empty: Story = { args: { architecture: projects[1].architecture } };
