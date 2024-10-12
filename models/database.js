import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://kushalbharadwaj68:IuP6486Y1oPZzuW4@leaderboard.vpfej.mongodb.net/leaderboard?retryWrites=true&w=majority&appName=leaderboard')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
