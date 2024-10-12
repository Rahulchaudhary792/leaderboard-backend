const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leaderboard')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));