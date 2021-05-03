import express from 'express';
import cors from 'cors';
import horns from '../data/horn-critters.js';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hell nooooooo World!');
});

app.get('/api/horns', (req, res) => {
  res.json(horns);
});

export default app;