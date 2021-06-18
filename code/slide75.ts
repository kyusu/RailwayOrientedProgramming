import { Input } from "./slide59";
import { Result, Failure, Success } from "./slide16";

export const nameNotBlank = (input: Input): Result<Input> => {
  if (!input.name) {
    return Failure("Name must not be blank");
  } else {
    return Success(input);
  }
};

export const name50 = (input: Input): Result<Input> => {
  if (input.name.length > 50) {
    return Failure("Name must not be longer than 50 chars");
  } else {
    return Success(input);
  }
};

export const emailNotBlank = (input: Input): Result<Input> => {
  if (!input.email) {
    return Failure("E-mail must not be blank");
  } else {
    return Success(input);
  }
};
