import { credit } from "./creditar_conta.js";
import { debit } from "./debitar_conta.js";

export const transfer = (originAccount, destinyAccount, value) => {
  debit(originAccount, value);
  credit(destinyAccount, value, true);
};
