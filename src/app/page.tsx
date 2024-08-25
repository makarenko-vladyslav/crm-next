import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-xl font-bold leading-normal">This is a home page</h1>

            <p>
                Go to{" "}
                <Link
                    href="/dashboard"
                    className="text-blue-700 no-underline hover:text-blue-300 hover:underline"
                >
                    Admin panel
                </Link>
            </p>
        </main>
    );
}
