import mongoose from 'mongoose';
mongoose.connect('mongodb://0.0.0.0:27017/leaderboard')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
