import { HideAddBtn } from "@/store/Common/common.store";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useHideAddBtn = () => {
  const setHideAddBtn = useSetRecoilState(HideAddBtn);
  useEffect(() => {
    setHideAddBtn(true);
    return () => setHideAddBtn(false);
  }, []);
};
