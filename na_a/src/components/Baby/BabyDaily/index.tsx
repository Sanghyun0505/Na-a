import { useParams } from "react-router-dom";
import * as S from "./style";

export default function BabyDaily() {
  const { id } = useParams();
  return <div>디테일1</div>;
}
