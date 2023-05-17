'use strict';

import { Router } from 'express';

import { getAll, getOne, create, remove, update } from '../controllers/Details';

const detailsRouter = Router();

detailsRouter.get('/', getAll);
detailsRouter.get('/:productId', getOne);
detailsRouter.post('/', create);
detailsRouter.delete('/:productId', remove);
detailsRouter.patch('/:productId', update);

export default detailsRouter;
