import path from 'node:path';
import http from 'node:http';
import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import * as dotenv from 'dotenv';
import { router } from './routes';
import './shared/container';

dotenv.config();

const port = 3001;

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(express.json());

    app.use(router);

    server.listen(3001, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongodb'));
