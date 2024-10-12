import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
	name: String,
	points: { type: Number, default: 0 }
  });
const User = mongoose.model('User', userSchema);
export default User;
