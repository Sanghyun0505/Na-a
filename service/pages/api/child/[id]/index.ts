import { NextApiRequest, NextApiResponse } from 'next';
import Child, { IChild } from '@/models/Child';
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';
import { AuthenticatedRequest, authGuard } from '@/libs/auth/authGuard';
import { IUser } from '@/models/User';

dbConnect();

async function updateChild(
  req: AuthenticatedRequest,
  res: NextApiResponse<ResponseBody<any>>
) {

  const { id } = req.query;
  const parent = req.user as IUser;
  if (!parent) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const child = await Child.findOne({ _id: id, parent }).populate('parent', 'profileImage userid username').exec();

      if (!child) {
        return res.status(404).json({ success: false, message: 'Child not found' });
      }

      return res.status(200).json({ success: true, data: child });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'PATCH') {
    try {
      const { name, gender, birthdate, height, weight, bloodType, allergies, medications, medicalRecords } = req.body;
      
      const updatedChild = await Child.findOneAndUpdate(
        { _id: id, parent },
        {
          name,
          gender,
          birthdate,
          height,
          weight,
          bloodType,
          allergies,
          medications,
          medicalRecords,
        },
        { new: true }
      );

      if (!updatedChild) {
        return res.status(404).json({ success: false, message: 'Child not found' });
      }

      return res.status(200).json({ success: true, data: updatedChild });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedChild = await Child.findByIdAndDelete({ _id: id, parent });

      if (!deletedChild) {
        return res.status(404).json({ success: false, message: 'Child not found' });
      }

      return res.status(200).json({ success: true, data: deletedChild });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

export default authGuard(updateChild);
