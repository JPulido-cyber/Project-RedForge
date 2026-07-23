import Link from "next/link";

import { SocialLinks } from "@/components/footer";

export function NavigationActions() {
  return (
    <div className="nav-actions">
      <SocialLinks />
      <Link className="resume-button" href="/coming-soon">
        RESUME
      </Link>
    </div>
  );
}
