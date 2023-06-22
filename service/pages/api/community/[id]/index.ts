import { NextApiRequest, NextApiResponse } from 'next'
import Community, { ICommunity } from '@/models/Community';
import { dbConnect } from '@/libs/Database/dbConnect';
import { IUser } from '@/models/User';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';
dbConnect()

async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const user = req.user as IUser;
  if (req.method === 'PATCH') {
    try {
      const { category, title, content, images } = req.body;

      const updatedCommunity: ICommunity | null = await Community.findByIdAndUpdate(
        id,
        {
          category,
          title,
          content,
          images
        },
        { new: true }
      );

      if (!updatedCommunity) {
        res.status(404).json({ success: false, error: 'Community not found' });
        return;
      }

      res.status(200).json({ success: true, data: updatedCommunity });
    } catch (error) {
      console.error('Error occurred while updating community:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const community: ICommunity | null = await Community.findById(id).populate('user', 'username userid profileImage').exec();

      if (!community) {
        res.status(404).json({ success: false, error: 'Community not found' });
        return;
      }

      res.status(200).json({ success: true, data: community });
    } catch (error) {
      console.error('Error occurred while fetching community:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedCommunity: ICommunity | null = await Community.findByIdAndRemove(id);

      if (!deletedCommunity) {
        res.status(404).json({ success: false, error: 'Community not found' });
        return;
      }

      res.status(200).json({ success: true, data: deletedCommunity });
    } catch (error) {
      console.error('Error occurred while deleting community:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}

export default authGuard(handler)
