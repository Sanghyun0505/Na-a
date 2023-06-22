import baby from "@/public/public/baby.svg";
import community from "@/public/public/community.svg";
import festival from "@/public/public/festival.svg";
import hospital from "@/public/public/hospital.svg";
import mypage from "@/public/public/mypage.svg";
import selectCommunity from "@/public/public/selectCommunity.svg";
import selectFestival from "@/public/public/selectFestival.svg";
import selectHospital from "@/public/public/selectHospital.svg";
import selectMyPage from "@/public/public/selectMyPage.svg";
import selectBaby from "@/public/public/selectBaby.svg";

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
