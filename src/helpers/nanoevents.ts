import { Cart } from "@/model/Cart";
import { createNanoEvents } from "nanoevents";

import { EVENT_KEYS } from "../keys/events";
import { User } from "../model/User";

interface UserEvents {
  [EVENT_KEYS.CHANGE_USER]: (emitCallback: () => User) => void;
}

interface CartEvents {
  [EVENT_KEYS.ADD_TO_CART]: (emitCallback: () => Cart) => void;

}

const emitter = createNanoEvents<UserEvents>();

export { emitter };
