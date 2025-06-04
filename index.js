// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './Databases/config.js';
import notesRoutes from './Routers/notesRouter.js';
import userRoutes from './Routers/userRouter.js';
import { config } from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
config();
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});


app.use('/notes', notesRoutes);
app.use('/auth', userRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
