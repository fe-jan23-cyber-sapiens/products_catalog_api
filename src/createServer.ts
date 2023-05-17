'use strict';

import express from 'express';
import cors from 'cors';

import productsRouter from './routes/Products';
import detailsRouter from './routes/Details';

export const createServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.static('public'));
  app.use('/products', express.json(), productsRouter);
  app.use('/details', express.json(), detailsRouter);

  return app;
};
