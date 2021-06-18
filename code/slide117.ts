import { Result } from "./slide16";
import { MyUseCaseError } from "./slide115";
import { Input } from "./slide59";
import { absurd } from "fp-ts/function";

const returnMessage = (result: Result<Input, MyUseCaseError>): string => {
  switch (result.type) {
    case "Success": {
      return "Success";
    }
    case "Failure": {
      switch (result.reason.type) {
        case "DbUserNotFoundError": {
          return `User id ${result.reason.userId} was not found in the database`;
        }
        case "NameMustNotBeBlank": {
          return "Name must not be blank";
        }
        case "EmailMustNotBeBlank": {
          return "Email must not be blank";
        }
        case "EmailNotValid": {
          return `Email ${result.reason.invalidEmail}  is not valid`;
        }
        case "UserIdNotValid": {
          return `User id ${result.reason.userId} is not a valid user id`;
        }
        case "TechnicalError": {
          return "An error has occurred";
        }
        default: {
          return absurd(result.reason);
        }
      }
    }
    default: {
      return absurd(result);
    }
  }
};
