import { NextApiRequest, NextApiResponse } from 'next';
import Community, { ICommunity } from '@/models/Community';
import { dbConnect } from '@/libs/Database/dbConnect';
import { IUser } from '@/models/User';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';

dbConnect()

async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { category, title, content, images } = req.body;
      const user = req.user as IUser;

      const community: ICommunity = new Community({
        category,
        title,
        content,
        images,
        createdAt: new Date(),
        user,
        comments: [],
      });

      await community.save();

      res.status(200).json({ success: true, data: community });
    } catch (error) {
      console.error('Error occurred while creating community:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const communities: any[] = await Community.find().populate('user', 'username userid profileImage').exec();
      res.status(200).json({ success: true, data: communities });
    } catch (error) {
      console.error('Error occurred while fetching communities:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}

export default authGuard(handler)
