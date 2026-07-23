import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PlatformShell } from "./platform-shell";

const meta = {
  title: "Layout/PlatformShell",
  component: PlatformShell,
  parameters: { layout: "fullscreen" },
  args: {
    children: (
      <section className="platform-hero">
        <div>
          <p className="technical-eyebrow">Engineering platform</p>
          <h1>Build. Secure. Defend.</h1>
          <p>Shared navigation, forged surfaces, responsive typography, and lifecycle-safe presentation.</p>
        </div>
        <div className="platform-hero-grid" aria-hidden />
      </section>
    ),
  },
} satisfies Meta<typeof PlatformShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
