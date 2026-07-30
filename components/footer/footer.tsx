import { Logo } from "@/components/navigation";

import { FooterLinks } from "./footer-links";
import { SocialLinks } from "./social-links";

interface FooterProps {
  compact?: boolean;
  hidden?: boolean;
}

export function Footer({ compact = false, hidden = false }: FooterProps) {
  if (compact) {
    return (
      <footer className="site-footer site-footer-compact" hidden={hidden}>
        <Logo />
        <p>© 2026 Project RedForge. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer className="site-footer" hidden={hidden}>
      <Logo />
      <FooterLinks />
      <SocialLinks />
    </footer>
  );
}
