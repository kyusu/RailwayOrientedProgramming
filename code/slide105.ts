import { Result } from "./slide16";
import { absurd } from "fp-ts/es6/function";

export const returnMessage = <T>(result: Result<T>): string => {
  switch (result.type) {
    case "Success":
      return "Success";
    case "Failure":
      return result.reason;
    default:
      return absurd(result);
  }
};
