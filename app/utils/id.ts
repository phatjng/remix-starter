import { customAlphabet } from "nanoid/async";

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export async function generateId(length: number) {
  const nanoid = customAlphabet(alphabet, length);
  return nanoid();
}
