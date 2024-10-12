import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
import './models/database.js';
import User from './models/users.js';
import History from './models/history.js';
app.get('/api/users', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
});
app.post('/api/users', async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
});
app.post('/api/claim', async (req, res) => {
  const { userId } = req.body;
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(userId);
  user.points += randomPoints;
  await user.save();
  const name = user.name;
  const history = new History({ user: name, points: randomPoints });
  await history.save();
  res.json({ user, points: randomPoints });
});
app.get('/api/history', async (req, res) => {
  const history = await History.find().sort({_id: -1}).populate('user');
  res.json(history);
});
app.listen(5000, () => console.log('Server running on port 5000'));
