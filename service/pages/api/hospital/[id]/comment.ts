import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';
import HospitalReview from '@/models/HospitalReview';

dbConnect();
async function handler(
  req: AuthenticatedRequest,
  res: NextApiResponse<ResponseBody<any>>
) {
  if (req.method === 'POST') {
    try {
      const { content, score } = req.body;

      const user = req.user;
      if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }
      const hospitalReview = new HospitalReview({
        hospital_id: req.query.id, 
        content,
        score,
        user
      });

      await hospitalReview.save();
      
      return res.status(200).json({ success: true, data: { hospitalReview } });
    } catch (err) {
      console.log(err)
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
      });
    }
  }
  else if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const hospitalReviews = await HospitalReview.find({ hospital_id: id })
        .populate('user', 'profileImage userid username')
        .exec();
      return res.status(200).json({ success: true, data: { hospitalReviews } });
    } catch (err) {
      console.log(err)
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
      });
    }
  }
}

export default authGuard(handler)
