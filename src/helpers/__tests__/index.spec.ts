import { EVENT_KEYS } from "@/keys/events";
import { User } from "@/model/User";
import { emitter } from "../nanoevents";

const fakeUser = {
  name: { first: "userName", last: "last" },
  age: 12,
  email: "email",
  picture: { large: "asdasd", small: "fasfda" },
};

describe("CHANGE", () => {
  it("CHANGE", () => {
    let initialUser = {} as User;

    // set state User on has emitted
    emitter.on(EVENT_KEYS.CHANGE_USER, (userData) => {
      initialUser = userData();
      expect(initialUser).toEqual(fakeUser);
    });

    // emit event
    emitter.emit(EVENT_KEYS.CHANGE_USER, () => {
      expect(initialUser).toEqual({});
      return fakeUser;
    });
  });
});
