"use client";

import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <div className={cn("nav-links", mobile && "mobile-nav-links")}>
      {items.map((item) => (
        <a
          aria-current={pathname === item.href ? "page" : undefined}
          className={pathname === item.href ? "active" : undefined}
          href={item.href}
          key={item.label}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
