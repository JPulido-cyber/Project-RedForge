"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            alignItems: "center",
            display: "flex",
            fontFamily: "system-ui, sans-serif",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <p>500</p>
            <h1>System fault detected</h1>
            <p>The application encountered an unexpected error.</p>
            <button type="button" onClick={() => unstable_retry()}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
