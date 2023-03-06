import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="p-4">
      <h1 className="font-bold text-lg">remix-starter 🚀</h1>

      <Link to="/login" className="underline text-blue-500">
        Log in
      </Link>
    </main>
  );
}
