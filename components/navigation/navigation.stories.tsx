import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Navbar } from "./navbar";

const meta = {
  title: "Homepage/Navigation/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <div className="home-page min-h-24"><Story /></div>],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const Mobile: Story = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
};
