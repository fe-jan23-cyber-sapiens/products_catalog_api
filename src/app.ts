/* eslint-disable no-console */
'use strict';

const PORT = process.env.PORT || 3000;

import express from 'express';
import cors from 'cors';

import productsRouter from './routes/Products';
import detailsRouter from './routes/Details';
import ordersRouter from './routes/Order';

export const createServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.static('public'));
  app.use('/products', express.json(), productsRouter);
  app.use('/details', express.json(), detailsRouter);
  app.use('/orders', express.json(), ordersRouter);

  return app;
};

createServer().listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
