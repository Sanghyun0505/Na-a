import { atom } from "recoil";

export const HideHeader = atom<boolean>({
  key: "hideHeader",
  default: false,
});

export const HideFooter = atom<boolean>({
  key: "hideFooter",
  default: false,
});

export const ChangeRegistAddress = atom<string>({
  key: "changeRegistAddress",
  default: "",
});
