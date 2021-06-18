import { bind } from "./slide74";
import { emailNotBlank, name50, nameNotBlank } from "./slide75";

export const liftedNameNotBlack = bind(nameNotBlank);
export const liftedName50 = bind(name50);
export const liftedEmailNotBlack = bind(emailNotBlank);
