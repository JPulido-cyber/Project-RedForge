import type { Metadata } from "next";

import { MaintenanceState } from "@/components/feedback";

export const metadata: Metadata = {
  title: "Maintenance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return <MaintenanceState />;
}
