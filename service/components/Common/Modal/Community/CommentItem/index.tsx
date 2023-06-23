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
}

export default function CommentItem({ id, commentId }: Props) {
  const [comments, setComments] = useState<CommentIdReponse | null>(null);
  useEffect(() => {
    const comment = async () => {
      try {
        const data = await customAxios.get(
          `community/${id}/comment/${commentId}`
        );
        setComments(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    comment();
  }, []);

  return (
    <ModalItem>
      <Info>
        <div>
          {comments?.data.user.userid} ·{" "}
          {getTimeAgo(new Date(comments?.data.createdAt!!))}
        </div>
        <Image src={edit} alt="edit" />
      </Info>
      <Comment>{comments?.data.content}</Comment>
    </ModalItem>
  );
}
