import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideFooter } from "../../store/Common/common.store";

const useHideFooter = () => {
  const setHideFooter = useSetRecoilState(HideFooter);
  useEffect(() => {
    setHideFooter(true);
    return () => setHideFooter(false);
  }, [setHideFooter]);
  return {};
};

export default useHideFooter;
