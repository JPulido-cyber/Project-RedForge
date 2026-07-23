import type { Metadata } from "next";

import { MaintenanceState } from "@/components/feedback";
import { PlatformShell } from "@/components/layout";

export const metadata: Metadata = {
  title: "Maintenance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return <PlatformShell><MaintenanceState /></PlatformShell>;
}
