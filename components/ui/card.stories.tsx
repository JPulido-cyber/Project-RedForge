import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./card";

const meta = {
  title: "UI/Surfaces/Card",
  component: Card,
  args: {
    children: "A focused surface for related RedForge content.",
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
