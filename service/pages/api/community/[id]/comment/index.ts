import { NextApiRequest, NextApiResponse } from 'next';
import Community, { ICommunity } from '@/models/Community';
import Comment, { IComment } from '@/models/Comment';
import { IUser } from '@/models/User';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';
import { dbConnect } from '@/libs/Database/dbConnect';

dbConnect()

async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'POST') {
    try {
      const { content } = req.body;
      const user = req.user as IUser;

      const comment: IComment = new Comment({
        communityId: id,
        content,
        createdAt: new Date(),
        user,
        community: id,
      });

      await comment.save();

      // Update the comments array in the corresponding community
      await Community.findByIdAndUpdate(id, {
        $push: { comments: comment._id },
      });

      res.status(200).json({ success: true, data: comment });
    } catch (error) {
      console.error('Error occurred while creating comment:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const community: ICommunity | null = await Community.findById(id)
        .populate({
          path: 'comments',
          populate: { path: 'user', select: 'userid username profileImage' },
        })
        .exec();

      if (!community) {
        res.status(404).json({ success: false, error: 'Community not found' });
        return;
      }

      res.status(200).json({ success: true, data: community.comments });
    } catch (error) {
      console.error('Error occurred while fetching comments:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}

export default authGuard(handler)
