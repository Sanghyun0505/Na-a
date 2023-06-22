import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IHospitalReview extends Document {
  id: string;
  hospital_id: string;
  user_id: string;
  score: number;
  content: string;
  created_at: Date;
  user: IUser['_id'];
}

const HospitalReviewSchema: Schema = new Schema({
  id: { type: String, required: true },
  hospital_id: { type: String, required: true },
  user_id: { type: String, required: true },
  score: { type: Number, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IHospitalReview>('HospitalReview', HospitalReviewSchema);
