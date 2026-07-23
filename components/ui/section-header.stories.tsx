import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SectionHeader } from "./section-header";

const meta = {
  title: "UI/Typography/Section Header",
  component: SectionHeader,
  args: {
    eyebrow: "Engineering log",
    title: "Systems built for operational clarity",
    description:
      "A reusable heading pattern for major sections across the platform.",
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutEyebrow: Story = {
  args: { eyebrow: undefined },
};
