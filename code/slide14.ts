export type Success = {
  type: "Success";
  data: string;
};

export type ValidationError = {
  type: "ValidationError";
  error: string;
};

export type UpdateError = {
  type: "UpdateError";
  error: string;
};

export type SmtpError = {
  type: "SmtpError";
  error: string;
};

export type Result = Success | ValidationError | UpdateError | SmtpError;
