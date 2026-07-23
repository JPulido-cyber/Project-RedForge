import type { ReactNode } from "react";

import { cn } from "@/lib";

export interface ContentPageTemplateProps {
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  metadata?: ReactNode;
  title: ReactNode;
}

export function ContentPageTemplate({
  aside,
  children,
  className,
  description,
  eyebrow,
  metadata,
  title,
}: ContentPageTemplateProps) {
  return (
    <main className={cn("mx-auto w-full max-w-7xl px-6 py-16", className)}>
      <header className="max-w-3xl border-b border-border pb-10">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg leading-8 text-text-muted">{description}</p>
        ) : null}
        {metadata ? <div className="mt-5">{metadata}</div> : null}
      </header>
      <div
        className={cn(
          "mt-10 grid gap-10",
          aside ? "lg:grid-cols-[minmax(0,1fr)_18rem]" : "grid-cols-1",
        )}
      >
        <article className="min-w-0">{children}</article>
        {aside ? <aside>{aside}</aside> : null}
      </div>
    </main>
  );
}
