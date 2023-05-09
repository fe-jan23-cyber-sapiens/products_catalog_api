'use strict';

const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/Products');

function createServer() {
  const app = express();

  app.use(cors());

  app.use('/products', express.json(), productsRouter);

  return app;
}

module.exports = {
  createServer,
};
