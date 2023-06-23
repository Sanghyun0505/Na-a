import Detail from "@/components/Children/Detail";
import { CommonContainer } from "@/styles/commonStyle";
import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();
  return <Detail id={router.query.id} />;
}
