import { Result, Failure, Success } from "./slide16";
import { Input } from "./slide59";

declare function checkValidity(email: string): boolean;

const nameMustNotBeBlank = "NameMustNotBeBlank" as const;
const emailMustNotBeBlank = "EmailMustNotBeBlank" as const;

export type EmailNotValid = { email: string };

export type Error =
  | typeof nameMustNotBeBlank
  | typeof emailMustNotBeBlank
  | EmailNotValid;

export const validateInput = (input: Input): Result<Input, Error> => {
  if (!input.name) {
    return Failure(nameMustNotBeBlank);
  } else if (!checkValidity(input.email)) {
    return Failure({ email: input.email });
  } else if (!input.email) {
    return Failure(emailMustNotBeBlank);
  } else {
    return Success(input);
  }
};
