'use strict';

import { Router } from 'express';

import { getAll, getOne, create, remove } from '../controllers/Orders';

const ordersRouter = Router();

ordersRouter.get('/', getAll);
ordersRouter.get('/:orderId', getOne);
ordersRouter.post('/', create);
ordersRouter.delete('/:orderId', remove);

export default ordersRouter;
