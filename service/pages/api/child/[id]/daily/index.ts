import { NextApiRequest, NextApiResponse } from 'next';
import Daily, { IDaily } from '@/models/Daily';
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';

dbConnect();

async function createDaily(
  req: AuthenticatedRequest,
  res: NextApiResponse<ResponseBody<any>>
) {
  const { id } = req.query;

  if (req.method === 'POST') {
    try {
      const { date, content } = req.body;

      const daily = new Daily({
        date,
        content,
        child: id,
      });

      const createdDaily = await daily.save();

      return res.status(201).json({ success: true, data: createdDaily });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'GET') {
    try {
      const childId = id;
      const dailyRecords = await Daily.find({ child: childId });

      return res.status(200).json({ success: true, data: dailyRecords });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

export default authGuard(createDaily);
