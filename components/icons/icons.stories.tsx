import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ServerIcon } from "./system";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CloseIcon,
  MenuIcon,
  TerminalIcon,
} from ".";

const meta = {
  title: "Foundations/Icons",
  component: ServerIcon,
} satisfies Meta<typeof ServerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 text-text">
      <ServerIcon aria-label="Server" />
      <TerminalIcon aria-label="Terminal" />
      <MenuIcon aria-label="Menu" />
      <CloseIcon aria-label="Close" />
      <ArrowRightIcon aria-label="Arrow right" />
      <CheckCircleIcon aria-label="Success" />
      <AlertTriangleIcon aria-label="Warning" />
    </div>
  ),
};
