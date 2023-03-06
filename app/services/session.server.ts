import { createCookieSessionStorage } from "@remix-run/node";

// For documentation: https://github.com/sergiodxa/remix-auth
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.APP_SECRET as string],
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
