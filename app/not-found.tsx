import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-1 justify-center items-center h-[70vh]">
            <h1 className="text-3xl">404 Not Found</h1>
            <Link href="/" className="text-sakura-3 decoration-dashed underline underline-offset-4 hover:text-white transition-colors">Go back to home</Link>
        </div>
    )
}