import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MetricsSection } from "./metrics-section";

const meta = {
  title: "Homepage/Metrics/MetricsSection",
  component: MetricsSection,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <main className="home-page"><Story /></main>],
} satisfies Meta<typeof MetricsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
