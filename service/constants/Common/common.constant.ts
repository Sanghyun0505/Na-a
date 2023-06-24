import community from "@/public/community.svg";
import selectCommunity from "@/public/selectCommunity.svg";
import children from "@/public/children.svg";
import selectChildren from "@/public/selectChildren.svg";
import selectFestival from "@/public/selectFestival.svg";
import festival from "@/public/festival.svg";
import hospital from "@/public/hospital.svg";
import selectHospital from "@/public/selectHospital.svg";
import myPage from "@/public/myPage.svg";
import selectMyPage from "@/public/selectMyPage.svg";

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
    img: children,
    selectImg: selectChildren,
    link: "/childrenpage",
  },
  {
    id: 2,
    img: festival,
    selectImg: selectFestival,
    link: "/festivalpage",
  },
  {
    id: 3,
    img: hospital,
    selectImg: selectHospital,
    link: "/hospitalpage",
  },
  {
    id: 4,
    img: myPage,
    selectImg: selectMyPage,
    link: "/userpage",
  },
];
