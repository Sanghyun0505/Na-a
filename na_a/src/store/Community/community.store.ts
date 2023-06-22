import { atom } from "recoil";

export const CommunityId = atom<string>({
  key: "communityId",
  default: "",
});
