import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return <section className={cn("scroll-mt-20", className)} {...props} />;
}
