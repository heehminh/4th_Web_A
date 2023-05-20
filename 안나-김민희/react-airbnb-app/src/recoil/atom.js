import { atom } from "recoil";

export const nameAtom = atom({
  key: "nameAtom",
  default: "",
});

export const emailAtom = atom({
  key: "emailAtom",
  default: "",
});

export const loginAtom = atom({
  key: "loginAtom",
  default: false,
});
