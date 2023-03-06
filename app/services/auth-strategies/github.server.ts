import { GitHubStrategy } from "remix-auth-github";
import { query } from "~/db/index.server";
import { generateId } from "~/utils/id";

export let githubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
    callbackURL: process.env.GITHUB_CALLBACK_URL as string,
  },
  async ({ accessToken, extraParams, profile }) => {
    const user = await query
      .selectFrom("user")
      .select(["id", "name", "email", "image_url"])
      .where("email", "=", profile.emails[0].value)
      .executeTakeFirst();

    // Create user if does not already exist
    if (!user) {
      const userId = await generateId(12);
      await query
        .insertInto("user")
        .values({
          id: userId,
          name: profile.displayName,
          email: profile.emails[0].value,
          image_url: profile.photos[0].value,
        })
        .execute();

      return {
        id: userId,
        name: profile.displayName,
        email: profile.emails[0].value,
        image_url: profile.photos[0].value,
      };
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image_url: user.image_url,
    };
  }
);
