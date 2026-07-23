import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export function BackgroundLayer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden className={cn("pointer-events-none", className)} {...props} />;
}
