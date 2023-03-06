import { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  return authenticator.authenticate("github", request, {
    // You can change the following redirects to elsewhere.
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}
