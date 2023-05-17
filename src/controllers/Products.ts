/* eslint-disable no-console */
'use strict';

import  { productsService } from '../services/Products';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const products = await productsService.getAll(category as string);

    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const foundProduct = await productsService.getById(productId);

    if (!foundProduct) {
      res.sendStatus(404);

      return;
    }

    res.send(foundProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getNew = async(req: Request, res: Response) => {
  try {
    const newProducts = await productsService.getNew();

    res.send(newProducts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getDiscount = async(req: Request, res: Response) => {
  try {
    const productsWithDiscount = await productsService.getDiscount();

    res.send(productsWithDiscount);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getRandom = async(req: Request, res: Response) => {
  try {
    const productsRandom = await productsService.getRandom();

    res.send(productsRandom);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const update = async(req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const foundProduct = await productsService.getById(productId);

    if (!foundProduct) {
      res.sendStatus(404);

      return;
    }

    const productBody = req.body;

    if (Object.values(productBody).length === 0) {
      res.sendStatus(400);

      return;
    }

    const updatedProduct = await productsService.update(productId, productBody);

    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newProduct = await productsService.create(body);

    res.statusCode = 201;
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const foundProduct = await productsService.getById(productId);

    if (!foundProduct) {
      res.sendStatus(404);

      return;
    }

    await productsService.remove(productId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

