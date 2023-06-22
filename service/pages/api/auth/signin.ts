import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken"
import { SHA512 } from 'crypto-js'
import User from '@/models/User'
import { dbConnect } from '@/libs/Database/dbConnect'
import { ResponseBody } from '@/interface/ResponseBody'

const JWT_SECRET = process.env.JWT_SECRET ?? 'thisissecret'
dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody<any>>
) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: '해당 메서드는 허용되지 않은 메서드입니다.' })

  const { userid, password } = req.body
  const user: { salt: string, password: string } | any = await User.findOne({ userid })
  if (!user) return res.status(401).json({ success: false, message: '아이디 또는 비밀번호 오류입니다.' })

  const { salt, password: userPassword } = user
  const hashedPassword = SHA512(salt + password).toString()
  if (hashedPassword !== userPassword) return res.status(401).json({ success: false, message: '아이디 또는 비밀번호 오류입니다.' })

  const token = jwt.sign({ userid }, JWT_SECRET, { expiresIn: '1d' })
  res.status(200).json({ success: true, data: { token } })
}
