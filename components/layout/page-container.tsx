import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export function PageContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-6", className)}
      {...props}
    />
  );
}
