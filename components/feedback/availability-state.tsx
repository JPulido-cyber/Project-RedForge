import type { ReactNode } from "react";

import { cn } from "@/lib";

interface AvailabilityStateProps {
  actions?: ReactNode;
  className?: string;
  description: ReactNode;
  eyebrow: ReactNode;
  title: ReactNode;
}

function AvailabilityState({
  actions,
  className,
  description,
  eyebrow,
  title,
}: AvailabilityStateProps) {
  return (
    <main
      className={cn(
        "flex min-h-screen items-center justify-center bg-surface px-6 py-16",
        className,
      )}
    >
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-text-muted">{description}</p>
        {actions ? (
          <div className="mt-8 flex justify-center gap-3">{actions}</div>
        ) : null}
      </div>
    </main>
  );
}

export function MaintenanceState({ actions }: Pick<AvailabilityStateProps, "actions">) {
  return (
    <AvailabilityState
      eyebrow="Maintenance"
      title="Systems are temporarily offline"
      description="RedForge is undergoing scheduled maintenance. Service will resume after verification is complete."
      actions={actions}
    />
  );
}

export function ComingSoonState({ actions }: Pick<AvailabilityStateProps, "actions">) {
  return (
    <AvailabilityState
      eyebrow="Coming soon"
      title="This system is still being forged"
      description="The foundation is ready. This experience will be published after its design and engineering review."
      actions={actions}
    />
  );
}
