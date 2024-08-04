import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-1">
      <h1 className="text-3xl">404 Not Found</h1>
      <Link
        href="/"
        className="text-sakura-3 underline decoration-dashed underline-offset-4 transition-colors hover:text-white"
      >
        Go back to home
      </Link>
    </div>
  );
}
