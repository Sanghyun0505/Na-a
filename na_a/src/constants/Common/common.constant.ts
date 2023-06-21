import baby from "../../assets/baby.svg";
import community from "../../assets/community.svg";
import festival from "../../assets/festival.svg";
import hospital from "../../assets/hospital.svg";
import mypage from "../../assets/mypage.svg";
import selectCommunity from "../../assets/selectCommunity.svg";
import selectFestival from "../../assets/selectFestival.svg";
import selectHospital from "../../assets/selectHospital.svg";
import selectMyPage from "../../assets/selectMyPage.svg";
import selectBaby from "../../assets/selectBaby.svg";

interface Type {
  id: number;
  img: string;
  selectImg: string;
  link: string;
}

export const FOOTER_ITEMS: Type[] = [
  {
    id: 0,
    img: community,
    selectImg: selectCommunity,
    link: "/",
  },
  {
    id: 1,
    img: baby,
    selectImg: selectBaby,
    link: "/babycare",
  },
  {
    id: 2,
    img: festival,
    selectImg: selectFestival,
    link: "/festival",
  },
  {
    id: 3,
    img: hospital,
    selectImg: selectHospital,
    link: "/hospital",
  },
  {
    id: 4,
    img: mypage,
    selectImg: selectMyPage,
    link: "/mypage",
  },
];
