import { bind } from "./slide74";
import { flow } from "fp-ts/function";
import { SingleTrackFunction } from "./slide89";
import { Success } from "./slide16";

export const map = <In, Out>(
  singleTrackFunction: SingleTrackFunction<In, Out>
) => bind(flow(singleTrackFunction, Success));
