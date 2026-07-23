import type { Metadata } from "next";

import { ComingSoonState } from "@/components/feedback";
import { PlatformShell } from "@/components/layout";

export const metadata: Metadata = { title: "Engineering Blog" };

export default function BlogPage() {
  return (
    <PlatformShell>
      <ComingSoonState />
    </PlatformShell>
  );
}
