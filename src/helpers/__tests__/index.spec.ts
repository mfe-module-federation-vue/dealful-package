import { STORAGE_KEYS } from "@/keys";
import { EVENT_KEYS } from "@/keys/events";
import { User } from "@/model/User";
import { emitter } from "../nanoevents";
import { userData } from "../storage";

const fakeUser = {
  name: { first: "userName", last: "last" },
  age: 12,
  email: "email",
  picture: { large: "asdasd", small: "fasfda" },
};

describe("Validate emitters ", () => {
  it("Should emit user date and get it at on method", () => {
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

let user: unknown;
const localStorageMock = (() => {
  return {
    getItem(key: STORAGE_KEYS) {
      return JSON.stringify(user);
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});
describe("Validate storage ", () => {
  it("Should return erro when is undefined", () => {
    let data = null;
    let erro = null;

    try {
      data = userData();
    } catch (error) {
      erro = error;
    }
    expect(erro).toBeInstanceOf(Error);
    expect(data).toBeNull();
  });
  it("Should return user data when has value", () => {
    let data = null;
    let erro = null;

    user = { name: "teste" };

    try {
      data = userData();
    } catch (error) {
      erro = error;
    }
    expect(erro).toBeNull();
    expect(data).toEqual(user);
  });
});
