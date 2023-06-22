import mongoose, { Schema, Document } from 'mongoose';
import { IChild } from './Child';

export interface IDaily extends Document {
  _id: string;
  date: Date;
  content: string;
  child: IChild['_id'];
}

const DailySchema: Schema = new Schema({
  date: { type: Date, required: true },
  content: { type: String, required: true },
  child: { type: Schema.Types.ObjectId, ref: 'Child', required: true },
});

export default mongoose.model<IDaily>('Daily', DailySchema);
