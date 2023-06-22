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
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      const reviewId = req.query.commendId;

      const user = req.user;
      if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }

      const deletedReview = await HospitalReview.findOneAndDelete({ _id: reviewId, hospital_id: id, user: user._id });

      if (!deletedReview) {
        return res.status(404).json({ success: false, message: 'Review not found' });
      }

      return res.status(200).json({ success: true, data: { deletedReview } });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
      });
    }
  } else if (req.method === 'PATCH') {
    try {
      const { id } = req.query;
      const reviewId = req.query.commendId;
      const { content, score } = req.body;

      const user = req.user;
      if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }

      const updatedReview = await HospitalReview.findOneAndUpdate(
        { _id: reviewId, hospital_id: id, user: user._id },
        { content, score },
        { new: true }
      );

      if (!updatedReview) {
        return res.status(404).json({ success: false, message: 'Review not found' });
      }

      return res.status(200).json({ success: true, data: { updatedReview } });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
      });
    }
  }
}

export default authGuard(handler)
