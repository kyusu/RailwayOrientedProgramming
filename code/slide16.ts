export type Success<T> = {
  type: "Success";
  data: T;
};

export type Failure<E> = {
  type: "Failure";
  reason: E;
};

export type Result<T, E = string> = Success<T> | Failure<E>;

export const Failure = <T = string>(reason: T): Failure<T> => ({
  type: "Failure",
  reason,
});

export const Success = <T>(data: T): Success<T> => ({ type: "Success", data });
