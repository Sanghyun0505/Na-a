import { NextApiRequest, NextApiResponse } from 'next';
import Daily, { IDaily } from '@/models/Daily';
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';

dbConnect();

async function handleDailyRequest(
  req: AuthenticatedRequest,
  res: NextApiResponse<ResponseBody<any>>
) {
  const { id, dailyId } = req.query;

  if (req.method === 'GET') {
    try {
      const childId = id;
      const dailyRecords = await Daily.find({ child: childId });

      return res.status(200).json({ success: true, data: dailyRecords });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'PATCH') {
    try {
      const { date, content } = req.body;

      const updatedDaily = await Daily.findOneAndUpdate(
        { _id: dailyId, child: id },
        { date, content },
        { new: true }
      );

      if (!updatedDaily) {
        return res.status(404).json({ success: false, message: 'Daily record not found' });
      }

      return res.status(200).json({ success: true, data: updatedDaily });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedDaily = await Daily.findOneAndDelete({ _id: dailyId, child: id });

      if (!deletedDaily) {
        return res.status(404).json({ success: false, message: 'Daily record not found' });
      }

      return res.status(200).json({ success: true, data: deletedDaily });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

export default authGuard(handleDailyRequest);
