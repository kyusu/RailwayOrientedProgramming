import { Failure, Result } from "./slide16";
import { absurd } from "fp-ts/function";

type SwitchFunction<In, Out> = (i: In) => Result<Out>;

type Bind = <In, Out>(
  switchFunction: SwitchFunction<In, Out>
) => (twoTrackInput: Result<In>) => Result<Out>;

export const bind: Bind = (switchFunction) => (twoTrackInput) => {
  switch (twoTrackInput.type) {
    case "Failure":
      return Failure(twoTrackInput.reason);
    case "Success":
      return switchFunction(twoTrackInput.data);
    default:
      return absurd(twoTrackInput);
  }
};
