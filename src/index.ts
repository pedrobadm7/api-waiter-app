import express, { json } from 'express';
import mongoose from 'mongoose';

const port = 3001;

import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongodb'));
