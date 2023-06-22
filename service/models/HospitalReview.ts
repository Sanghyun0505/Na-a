import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IHospitalReview extends Document {
  hospital_id: string;
  score: number;
  content: string;
  created_at: Date;
  user: IUser['_id'];
}

const HospitalReviewSchema: Schema = new Schema({
  hospital_id: { type: String, required: true },
  score: { type: Number, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.models.HospitalReview || mongoose.model<IHospitalReview>('HospitalReview', HospitalReviewSchema);
