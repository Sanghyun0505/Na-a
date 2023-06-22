import { atom } from "recoil";

export const CommunityModal = atom<boolean>({
  key: "communityModal",
  default: false,
});
