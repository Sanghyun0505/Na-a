import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IComment } from './Comment';

export enum CommunityCategory {
  FREE = 'FREE',
  QNA = 'QNA',
  REVIEW = 'REVIEW'
}

export interface ICommunity extends Document {
  _id: string;
  category: CommunityCategory;
  title: string;
  content: string;
  images?: string[];
  createdAt: Date;
  user: IUser['_id'];
  comments: IComment['_id'][];
}

const CommunitySchema: Schema = new Schema({
  category: { type: Schema.Types.String, enum: Object.values(CommunityCategory), required: true },
  title: { type: Schema.Types.String, required: true },
  content: { type: Schema.Types.String, required: true },
  images: [{ type: Schema.Types.String }],
  createdAt: { type: Schema.Types.Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

export default mongoose.models.Community || mongoose.model<ICommunity>('Community', CommunitySchema);
