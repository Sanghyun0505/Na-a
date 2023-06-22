import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const MONGODB = process.env.MONGODB ?? 'mongodb://icare-cosmosdb:bLUzCLDQWAbOy98QGw919xBGm3V8p2tUDFlx2PC7IQX4F39r5YtFKbdUGqLbDSFpi04k2zchaWkQACDb377RdQ==@icare-cosmosdb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@icare-cosmosdb@'

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB);
}

export default async function dbMiddleware(req: NextApiRequest, res: NextApiResponse, next: Function) {
  try {
    if (!(global as any).mongoose) {
      (global as any).mongoose == dbConnect();
    }
  } catch (e) {
    console.error(e);
  }
  return next();
}
