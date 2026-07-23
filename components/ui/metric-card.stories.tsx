import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MetricCard } from "./metric-card";

const meta = {
  title: "UI/Data Display/Metric Card",
  component: MetricCard,
  args: {
    label: "Systems online",
    value: "24",
    detail: "2 added this month",
    trend: "up",
  },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {};

export const Neutral: Story = {
  args: {
    detail: "No change",
    trend: "neutral",
  },
};

export const Negative: Story = {
  args: {
    detail: "1 requires attention",
    trend: "down",
  },
};
