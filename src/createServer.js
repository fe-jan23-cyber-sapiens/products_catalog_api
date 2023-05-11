'use strict';

const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/Products');
const detailsRouter = require('./routes/Details');

function createServer() {
  const app = express();

  app.use(cors());

  app.use(express.static('public'));
  app.use('/products', express.json(), productsRouter);
  app.use('/details', express.json(), detailsRouter);

  return app;
}

module.exports = {
  createServer,
};
