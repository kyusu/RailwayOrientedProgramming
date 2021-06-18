import { flow } from "fp-ts/function";
import {
  liftedEmailNotBlack,
  liftedName50,
  liftedNameNotBlack,
} from "./slide77";
import { Input } from "./slide59";
import { Result } from "./slide16";

export const validateInput: (a: Result<Input>) => Result<Input> = flow(
  liftedNameNotBlack,
  liftedName50,
  liftedEmailNotBlack
);
