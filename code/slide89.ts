import { Failure, Result, Success } from "./slide16";
import { absurd } from "fp-ts/function";

export type SingleTrackFunction<In, Out> = (i: In) => Out;

export type Map = <In, Out>(
  singleTrackFunction: SingleTrackFunction<In, Out>
) => (twoTrackInput: Result<In>) => Result<Out>;

export const map: Map = (singleTrackFunction) => (twoTrackInput) => {
  switch (twoTrackInput.type) {
    case "Success":
      return Success(singleTrackFunction(twoTrackInput.data));
    case "Failure":
      return Failure(twoTrackInput.reason);
    default:
      return absurd(twoTrackInput);
  }
};
