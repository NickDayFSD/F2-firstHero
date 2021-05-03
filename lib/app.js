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

app.get('/api/horns/:id', (req, res) => {
  res.json(horns[0]);
});

export default app;