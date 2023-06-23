import { atom } from "recoil";

export const CommunityModal = atom<boolean>({
  key: "communityModal",
  default: false,
});

export const CommunityCommentId = atom<string>({
  key: "communityCommentId",
  default: "",
});
