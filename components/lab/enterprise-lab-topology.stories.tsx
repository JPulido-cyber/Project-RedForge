import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { enterpriseHomeLabTopology } from "@/content/lab";
import { EnterpriseLabTopology } from "./enterprise-lab-topology";

const meta = {
  title: "Lab/Enterprise Lab Topology",
  component: EnterpriseLabTopology,
  args: { topology: enterpriseHomeLabTopology },
  parameters: { layout: "padded" },
} satisfies Meta<typeof EnterpriseLabTopology>;

export default meta;
type Story = StoryObj<typeof meta>;
export const VerifiedEnvironment: Story = {};
