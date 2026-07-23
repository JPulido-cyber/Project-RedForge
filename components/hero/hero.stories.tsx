import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero } from "./hero";

const meta = {
  title: "Homepage/Hero/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
