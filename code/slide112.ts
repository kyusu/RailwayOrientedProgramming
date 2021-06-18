import { Result, Failure, Success } from "./slide16";
import { Input } from "./slide59";

const nameMustNotBeBlank = "NameMustNotBeBlank" as const;
const emailMustNotBeBlank = "EmailMustNotBeBlank" as const;

export type Error = typeof nameMustNotBeBlank | typeof emailMustNotBeBlank;

export const validateInput = (input: Input): Result<Input, Error> => {
  if (!input.name) {
    return Failure(nameMustNotBeBlank);
  } else if (!input.email) {
    return Failure(emailMustNotBeBlank);
  } else {
    return Success(input);
  }
};
