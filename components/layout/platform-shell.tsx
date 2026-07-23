import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navigation";

export function PlatformShell({ children }: { children: ReactNode }) {
  return (
    <div className="platform-page">
      <Navbar />
      <main className="platform-main">{children}</main>
      <Footer />
    </div>
  );
}
