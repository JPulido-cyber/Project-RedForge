import type { Metadata } from "next";

import { ComingSoonState } from "@/components/feedback";
import { PlatformShell } from "@/components/layout";

export const metadata: Metadata = {
  title: "Coming Soon",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return <PlatformShell><ComingSoonState /></PlatformShell>;
}
