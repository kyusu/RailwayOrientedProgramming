import { Input } from "./slide59";

export const canonicalizeEmail = (input: Input): Input => ({
  ...input,
  email: input.email.trim().toLocaleLowerCase(),
});
