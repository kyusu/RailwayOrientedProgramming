import { Result, Success, Failure } from "./slide16";

export type Input = { name: string; email: string };

export const validateInput = (input: Input): Result<Input> => {
  if (!input.name) {
    return Failure("Name must not be blank");
  } else if (!input.email) {
    return Failure("E-mail must not be blank");
  } else {
    return Success(input);
  }
};
