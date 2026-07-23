import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeaturedProjects } from "./featured-projects";
import { ProjectsSection } from "./projects-section";

const meta = {
  title: "Homepage/Projects/ProjectsSection",
  component: ProjectsSection,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof ProjectsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Portfolio: Story = {};
export const Featured: Story = { render: () => <FeaturedProjects /> };
