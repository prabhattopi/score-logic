import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  totalPoints: number;
  prizes: number;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  totalPoints: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 },
});

export default mongoose.model<IUser>('User', UserSchema);
