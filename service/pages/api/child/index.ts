import { NextApiRequest, NextApiResponse } from 'next';
import Child, { IChild } from '@/models/Child';
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';

dbConnect();

async function createChild(
  req: AuthenticatedRequest,
  res: NextApiResponse<ResponseBody<IChild[] | any>>
) {
  if (req.method === 'POST') {
    try {
      const { name, gender, birthdate, height, weight, bloodType, allergies, medications, medicalRecords } = req.body;
      const parent = req.user
      if (!parent) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }

      const child: IChild = new Child({
        name,
        gender,
        birthdate,
        height,
        weight,
        bloodType,
        allergies,
        medications,
        medicalRecords,
        parent: parent,
      });

      await child.save();

      return res.status(200).json({ success: true, data: child });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'GET') {
    try {
      const parent = req.user;
      if (!parent) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }
      const children = await Child.find({ parent }).populate('parent', 'profileImage userid username').exec();

      return res.status(200).json({ success: true, data: children });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

export default authGuard(createChild);
