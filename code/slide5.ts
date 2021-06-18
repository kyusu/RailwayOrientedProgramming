import { Request } from "./slide4";

declare function receiveRequest(): Request;

declare function validateRequest(request: Request): void;

declare function canonicalizeEmail(request: Request): void;

declare namespace db {
  function updateDbFromRequest(request: Request): void;
}
declare namespace smtpServer {
  function sendEmail(email: string): void;
}

export const executeUseCase = (): string => {
  const request = receiveRequest();
  validateRequest(request);
  canonicalizeEmail(request);
  db.updateDbFromRequest(request);
  smtpServer.sendEmail(request.email);
  return "Success";
};
