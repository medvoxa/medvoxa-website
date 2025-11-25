// app/not-found.tsx

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-5xl font-semibold text-neutral-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <a
          href="/"
          className="px-8 py-3 bg-[var(--brand-primary)] text-white rounded-lg font-medium"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
