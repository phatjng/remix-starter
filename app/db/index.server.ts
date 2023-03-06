import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface User {
  id: Generated<string>;
  name: string;
  email: string;
  image_url: string;
}

interface Database {
  user: User;
}

export const query = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL as string,
  }),
});
