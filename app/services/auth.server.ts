import { Authenticator } from "remix-auth";
import { githubStrategy } from "./auth-strategies/github.server";
import { sessionStorage } from "./session.server";

// These things will be included in the session body.
// Feel free to customize its content to your specific needs.
interface User {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(githubStrategy, "github");
