interface Type {
  id: number;
  name: string;
}

export const COMMUNITAY_ITEMS: Type[] = [
  {
    id: 0,
    name: "FREE",
  },
  {
    id: 1,
    name: "QNA",
  },
  {
    id: 2,
    name: "REVIEW",
  },
];

export const HOME_ITEMS = [
  {
    id: 0,
    profileImage: "",
    userid: "Sanghyun0505",
    category: "FREE",
    images:
      "https://kostat.go.kr/galleryImgView.es?bid=11950&list_no=423629&seq=1",
    title: "대구, 경북지역 경제동향 현황",
    content: "대구 지역경제를 활발하게 활성하기 위해선...",
  },
  {
    id: 1,
    profileImage: "",
    userid: "suzzing",
    category: "QNA",
    images:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MzBfMTUx/MDAxNjE5NzY5Nzg2MzQ1.r20qNlf8Jx6SDWQr30gxSece-_XsnXxAZqZNlZYK71Ug.8nQ-AUJvryfmJ34vedoNRH8SIiGqa9kDof3Vg3rTcpwg.JPEG.daegu_news/%EB%8C%80%EA%B5%ACtmi-%EB%8C%80%EA%B5%AC3%ED%98%B8%EC%84%A0-07.jpg?type=w800",
    title: "대구 지역경제를 활발하게!",
    content: "대구 지역경제를 활발하게 활성하기 위해선...",
  },
];
