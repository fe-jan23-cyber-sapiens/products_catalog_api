'use strict';

const express = require('express');
const productsRouter = express.Router();

const productsControllers = require('../controllers/Products');

productsRouter.get('/', productsControllers.getAll);
productsRouter.post('/', productsControllers.create);
productsRouter.delete('/:productId', productsControllers.remove);
productsRouter.patch('/:productId', productsControllers.update);

module.exports = productsRouter;
