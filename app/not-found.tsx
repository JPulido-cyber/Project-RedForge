import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-brand">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          The requested route does not exist or has not been published.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-medium text-brand-contrast transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          href="/"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
