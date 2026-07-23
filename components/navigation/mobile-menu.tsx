import { MenuIcon } from "@/components/icons";
import type { NavigationItem } from "@/content/types";

import { NavigationLinks } from "./navigation-links";

interface MobileMenuProps {
  items: readonly NavigationItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  return (
    <details className="mobile-menu">
      <summary aria-label="Open navigation menu">
        <MenuIcon />
      </summary>
      <nav aria-label="Mobile navigation">
        <NavigationLinks items={items} mobile />
      </nav>
    </details>
  );
}
