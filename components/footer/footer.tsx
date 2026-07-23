import { Logo } from "@/components/navigation";

import { FooterLinks } from "./footer-links";
import { SocialLinks } from "./social-links";

interface FooterProps {
  hidden?: boolean;
}

export function Footer({ hidden = false }: FooterProps) {
  return (
    <footer className="site-footer" hidden={hidden}>
      <Logo />
      <FooterLinks />
      <SocialLinks />
    </footer>
  );
}
