import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";
import { Panel } from "./panel";

const meta = {
  title: "UI/Surfaces/Panel",
  component: Panel,
  args: {
    title: "Infrastructure status",
    description: "Current health across monitored systems.",
    children: "Panel content is composed by the consuming feature.",
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    actions: <Badge variant="success">Operational</Badge>,
  },
};
