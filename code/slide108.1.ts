import { flow } from "fp-ts/es6/function";
import { Request } from "./slide4";

declare function receiveRequest(): Request;
declare function validateRequest(request: Request): Request;
declare function updateDbFromRequest(request: Request): Request;
declare function sendEmail(request: Request): Request;
declare function returnMessage(request: Request): string;

export const executeUseCase = flow(
  receiveRequest,
  validateRequest,
  updateDbFromRequest,
  sendEmail,
  returnMessage
);
