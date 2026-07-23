import type { NavigationItem } from "@/content/types";
import { cn } from "@/lib";

interface NavigationLinksProps {
  items: readonly NavigationItem[];
  mobile?: boolean;
}

export function NavigationLinks({
  items,
  mobile = false,
}: NavigationLinksProps) {
  return (
    <div className={cn("nav-links", mobile && "mobile-nav-links")}>
      {items.map((item, index) => (
        <a className={index === 0 ? "active" : undefined} href={item.href} key={item.label}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
