import {
  CommentIdReponse,
  CommunityItemType,
} from "@/types/Community/community.type";
import { Info, ModalItem, Comment } from "../style";
import { useEffect, useState } from "react";
import { customAxios } from "@/libs/Axios/customAxios";
import Image from "next/image";
import edit from "@/public/edit.svg";
import { getTimeAgo } from "@/libs/Date/getTimeAgo";

interface Props {
  id: string;
  commentId: string;
  data: any;
}

export default function CommentItem({ id, commentId, data }: Props) {
  const [comments, setComments] = useState<CommentIdReponse | null>(null);
  useEffect(() => {
    const comment = async () => {
      try {
        const data = await customAxios.get(
          `community/${id}/comment/${commentId}`
        );
        setComments(data.data);
      } catch (e) {}
    };
    comment();
  }, []);

  return (
    <ModalItem>
      <Info>
        <div>
          {data.userid} · {data.date}
        </div>
        <Image src={edit} alt="edit" />
      </Info>
      <Comment>{data.content}</Comment>
    </ModalItem>
  );
}
