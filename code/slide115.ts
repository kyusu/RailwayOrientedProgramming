import { absurd } from "fp-ts/function";

export type PrimaryKeyNotValid = {
  type: "PrimaryKeyNotValid";
  primaryKey: string;
};

export type RecordNotFound = {
  type: "RecordNotFound";
  primaryKey: string;
};

export type DBTimeout = {
  type: "DBTimeout";
  connectionString: string;
  timeoutMs: number;
};

export type DBConcurrencyError = {
  type: "DBConcurrencyError";
};

export type DBAuthorizationError = {
  type: "DBAuthorizationError";
  credentials: string;
};

export type DBError =
  | PrimaryKeyNotValid
  | RecordNotFound
  | DBTimeout
  | DBConcurrencyError
  | DBAuthorizationError;

export type NameMustNotBeBlank = { type: "NameMustNotBeBlank" };

export type EmailMustNotBeBlank = { type: "EmailMustNotBeBlank" };

export type EmailNotValid = { type: "EmailNotValid"; invalidEmail: string };

export type UserIdNotValid = { type: "UserIdNotValid"; userId: string };

export type DbUserNotFoundError = {
  type: "DbUserNotFoundError";
  userId: string;
};

export type TechnicalError = {
  type: "TechnicalError";
};

export type MyUseCaseError =
  | NameMustNotBeBlank
  | EmailMustNotBeBlank
  | EmailNotValid
  | UserIdNotValid
  | DbUserNotFoundError
  | TechnicalError;

export const dbResultToMyResult = (dbError: DBError): MyUseCaseError => {
  switch (dbError.type) {
    case "PrimaryKeyNotValid":
      return { type: "UserIdNotValid", userId: dbError.primaryKey };
    case "RecordNotFound":
      return { type: "DbUserNotFoundError", userId: dbError.primaryKey };
    case "DBAuthorizationError":
      return { type: "TechnicalError" };
    case "DBConcurrencyError":
      return { type: "TechnicalError" };
    case "DBTimeout":
      return { type: "TechnicalError" };
    default:
      return absurd(dbError);
  }
};
