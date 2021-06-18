import { flow } from "fp-ts/es6/function";
import { Request } from "./slide4";
import { Result } from "./slide16";

declare function receiveRequest(): Result<Request>;
declare function validateRequest(request: Result<Request>): Result<Request>;
declare function updateDbFromRequest(request: Result<Request>): Result<Request>;
declare function sendEmail(request: Result<Request>): Result<Request>;
declare function returnMessage(request: Result<Request>): string;

export const executeUseCase = flow(
  receiveRequest,
  validateRequest,
  updateDbFromRequest,
  sendEmail,
  returnMessage
);
