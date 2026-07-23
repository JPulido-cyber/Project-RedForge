import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./footer";

const meta = {
  title: "Homepage/Footer/Footer",
  component: Footer,
  args: { hidden: false },
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
