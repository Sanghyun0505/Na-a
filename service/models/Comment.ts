import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { ICommunity } from './Community';

export interface IComment extends Document {
  _id: string;
  communityId: string;
  content: string;
  createdAt: Date;
  user: IUser['_id'];
  community: ICommunity['_id'];
}

const CommentSchema: Schema = new Schema({
  communityId: { type: Schema.Types.String, required: true },
  content: { type: Schema.Types.String, required: true },
  createdAt: { type: Schema.Types.Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  community: { type: Schema.Types.ObjectId, ref: 'Community' },
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);
