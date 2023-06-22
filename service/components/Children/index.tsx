import { ChangeRegistAddress } from "@/store/Common/common.store";
import { CommonContainer } from "@/styles/commonStyle";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function Children() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);

  useEffect(() => {
    setChangeRegistAddress("/ChildrenRegistPage");
  }, [setChangeRegistAddress]);
  return <CommonContainer>아이페이지</CommonContainer>;
}
