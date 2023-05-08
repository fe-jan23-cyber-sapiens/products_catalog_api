/* eslint-disable no-console */
'use strict';

const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

function createServer() {
  const app = express();

  app.use(cors());

  app.get('/phones', async(req, res) => {
    try {
      const phones = await fs.readFile('src/api/phones.json');

      res.send(JSON.parse(phones));
    } catch (error) {
      console.log(error);
    }
  });

  return app;
}

module.exports = {
  createServer,
};
