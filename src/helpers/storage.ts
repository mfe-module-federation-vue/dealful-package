import { User } from "@/model/User";
import { STORAGE_KEYS } from "../keys/storage";

export const userData = (): User => {
  const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);

  try {
    return JSON.parse(userData as string);
  } catch (error) {
    throw Error("user data is empty");
  }
};
