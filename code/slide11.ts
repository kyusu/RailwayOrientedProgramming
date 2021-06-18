import { Request } from "./slide4";

type CustomRecord = { id: string; name: string };

declare function receiveRequest(): Request;

declare function validateRequest(request: Request): boolean;

declare function canonicalizeEmail(request: Request): void;

declare namespace db {
  function updateDbFromRequest(request: Request): CustomRecord | null;
}

declare namespace smtpServer {
  function sendEmail(email: string): boolean;
}

declare namespace log {
  function error(message: string): void;
}

export const executeUseCase = () => {
  const request = receiveRequest();
  const isValidated = validateRequest(request);
  if (!isValidated) {
    return "Request is not valid";
  }
  canonicalizeEmail(request);
  try {
    const result = db.updateDbFromRequest(request);
    if (!result) {
      return "Customer record not found";
    }
  } catch (e) {
    return "DB error: Customer record not updated";
  }

  if (!smtpServer.sendEmail(request.email)) {
    log.error("Customer email not sent");
  }
  return "OK";
};
