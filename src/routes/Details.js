'use strict';

const express = require('express');
const detailsRouter = express.Router();

const detailsControllers = require('../controllers/Details');

detailsRouter.get('/', detailsControllers.getAll);
detailsRouter.get('/:productId', detailsControllers.getOne);
detailsRouter.post('/', detailsControllers.create);
detailsRouter.delete('/:productId', detailsControllers.remove);
detailsRouter.patch('/:productId', detailsControllers.update);

module.exports = detailsRouter;
