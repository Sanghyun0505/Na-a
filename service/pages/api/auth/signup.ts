import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { SHA512 } from 'crypto-js';
import User from '@/models/User';
import { dbConnect } from '@/libs/Database/dbConnect';
import { ResponseBody } from '@/interface/ResponseBody';

const JWT_SECRET = process.env.JWT_SECRET ?? 'thisissecret';
dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody<any>>
) {
  if (req.method !== 'POST')
    return res.status(405).json({
      success: false,
      message: '해당 메서드는 허용되지 않은 메서드입니다.',
    });

  const { userid, password, type } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ userid });
  if (existingUser)
    return res.status(409).json({
      success: false,
      message: '이미 존재하는 아이디입니다.',
    });

  try {
    // Generate a salt and hash the password
    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);

    // Create a new user and save it to the database
    const user = new User({
      userid,
      password: hashedPassword,
      salt,
      type
    });
    user.save();

    // Generate a JWT token for authentication
    const token = jwt.sign({ userid }, JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ success: true, data: { token } });
  } catch {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다.',
    });
  }
}

// Generate a random salt
function generateSalt(): string {
  const saltLength = 10;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let salt = '';
  for (let i = 0; i < saltLength; i++) {
    salt += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return salt;
}


// Hash the password using the salt
function hashPassword(password: string, salt: string) {
  return SHA512(salt + password).toString();
}
