'use strict';

import express from 'express';
const productsRouter = express.Router();

import { 
  getAll, 
  getNew, 
  create, 
  remove,
  update,
  getDiscount, 
  getRandom, 
  getOne,
} from '../controllers/Products';

productsRouter.get('/', getAll);
productsRouter.get('/new', getNew);
productsRouter.get('/discount', getDiscount);
productsRouter.get('/recommended', getRandom);
productsRouter.get('/:productId', getOne);

productsRouter.post('/', create);
productsRouter.delete('/:productId', remove);
productsRouter.patch('/:productId', update);

export default productsRouter;
