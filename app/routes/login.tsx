import { LoaderArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    // Redirect the user some where if they're already signed in.
    successRedirect: "/dashboard",
  });
}

export default function Login() {
  return (
    <Form action="/auth/github" method="post">
      <button type="submit" className="underline text-blue-500">
        Sign in with GitHub
      </button>
    </Form>
  );
}
