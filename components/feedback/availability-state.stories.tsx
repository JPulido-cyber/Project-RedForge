import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ComingSoonState, MaintenanceState } from "./availability-state";

const meta = {
  title: "Feedback/Availability States",
  component: MaintenanceState,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MaintenanceState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Maintenance: Story = {};

export const ComingSoon: Story = {
  render: () => <ComingSoonState />,
};
