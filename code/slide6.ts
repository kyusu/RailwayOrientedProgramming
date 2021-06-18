import { Request } from "./slide4";
import { flow } from "fp-ts/function";

declare function receiveRequest(): Request;

declare function validateRequest(request: Request): Request;

declare function canonicalizeEmail(request: Request): Request;

declare function updateDbFromRequest(request: Request): Request;

declare function sendEmail(request: Request): Request;

declare function returnMessage(request: Request): "Success";

export const executeUseCase = flow(
  receiveRequest,
  validateRequest,
  canonicalizeEmail,
  updateDbFromRequest,
  sendEmail,
  returnMessage
);
