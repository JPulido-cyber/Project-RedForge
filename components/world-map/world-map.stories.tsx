import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WorldMap } from "./world-map";

const meta = {
  title: "Homepage/World Map/WorldMap",
  component: WorldMap,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="home-page hero relative min-h-[560px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WorldMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NetworkTopology: Story = {};
