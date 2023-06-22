import { NextApiRequest, NextApiResponse } from 'next';
import Comment, { IComment } from '@/models/Comment';
import Community from '@/models/Community';
import { dbConnect } from '@/libs/Database/dbConnect';
import { authGuard } from '@/libs/auth/authGuard';

dbConnect()

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, commentId } = req.query;

  if (req.method === 'PATCH') {
    try {
      const { content } = req.body;

      const updatedComment: IComment | null = await Comment.findByIdAndUpdate(
        commentId,
        { content },
        { new: true }
      );

      if (!updatedComment) {
        res.status(404).json({ success: false, error: 'Comment not found' });
        return;
      }

      res.status(200).json({ success: true, data: updatedComment });
    } catch (error) {
      console.error('Error occurred while updating comment:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const comment: IComment | null = await Comment.findById(commentId).populate('user', 'username userid profileImage').exec();

      if (!comment) {
        res.status(404).json({ success: false, error: 'Comment not found' });
        return;
      }

      res.status(200).json({ success: true, data: comment });
    } catch (error) {
      console.error('Error occurred while fetching comment:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedComment: IComment | null = await Comment.findByIdAndRemove(commentId);

      if (!deletedComment) {
        res.status(404).json({ success: false, error: 'Comment not found' });
        return;
      }

      // Remove the comment id from the corresponding community
      await Community.findByIdAndUpdate(id, {
        $pull: { comments: commentId },
      });

      res.status(200).json({ success: true, data: deletedComment });
    } catch (error) {
      console.error('Error occurred while deleting comment:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}


export default authGuard(handler)
