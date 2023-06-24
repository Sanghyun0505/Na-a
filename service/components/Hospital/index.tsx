import { CommonContainer } from "@/styles/commonStyle";
import CONFIG from "@/config/config.json";
import Script from "next/script";
import { useHideAddBtn } from "@/hooks/Common/useHideAddBtn";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Location } from "@/types/hospital/hospital.type";
import { MapMarker } from "react-kakao-maps-sdk";
import searchIcon from "@/public/search.svg";

export default function Hospital() {
  const KAKAO_SDK_URL = `${CONFIG.KAKAOAPI}`;
  const [info, setInfo] = useState<Location | null>(null);
  const [markers, setMarkers] = useState<Location[]>([]);
  const [map, setMap] = useState<any>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, search]);
  useHideAddBtn();
  return (
    <CommonContainer>
      <S.SearchContainer>
        <S.SearchBox>
          <input
            placeholder="병원을 입력하세요"
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <S.SearchIcon src={searchIcon} alt="검색" width={15} height={15} />
        </S.SearchBox>
      </S.SearchContainer>
      <>
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
        <S.KakaoMap center={{ lat: 35.8714, lng: 128.6014 }} onCreate={setMap}>
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </S.KakaoMap>
      </>
    </CommonContainer>
  );
}
