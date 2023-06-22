import { NextApiRequest, NextApiResponse } from 'next';
import User, { type IUser } from '@/models/User'
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'thisissecret';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: IUser
}


export const authGuard = (handler: Function) => async (req: AuthenticatedRequest, res: NextApiResponse) => {
  try {
    // Check if the Authorization header is present
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Verify the JWT token
    const decoded = verify(token, JWT_SECRET) as IUser;
    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    
    const user = await User.findOne({ userid: decoded.userid });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Pass the decoded user data to the request object
    req.user = user;

    // Continue to the actual route handler
    return handler(req, res);
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};
