import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IDaily } from './Daily';

export enum ChildrenGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface IChild extends Document {
  _id: string;
  name: string;
  gender: ChildrenGender;
  profileImage?: string;
  birthdate: Date | null;
  height: number | null;
  weight: number | null;
  bloodType?: string | null;
  allergies?: string[] | null;
  medications?: string[] | null;
  medicalRecords?: string[] | null;
  parent: IUser['_id'];
  daily: IDaily['_id'][];
}

const ChildSchema: Schema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: Object.values(ChildrenGender), required: true },
  profileImage: { type: String },
  birthdate: { type: Date, default: null },
  height: { type: Number, default: null },
  weight: { type: Number, default: null },
  bloodType: { type: String, default: null },
  allergies: [{ type: String }],
  medications: [{ type: String }],
  medicalRecords: [{ type: String, default: null }],
  parent: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  daily: [{ type: Schema.Types.ObjectId, ref: 'Daily' }],
});

export default mongoose.models.Child || mongoose.model<IChild>('Child', ChildSchema);
