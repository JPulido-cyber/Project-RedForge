import { homepageContent } from "@/content/homepage";

import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavigationActions } from "./navigation-actions";
import { NavigationLinks } from "./navigation-links";

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Logo />
      <NavigationLinks items={homepageContent.navigation} />
      <NavigationActions />
      <MobileMenu items={homepageContent.navigation} />
    </nav>
  );
}
