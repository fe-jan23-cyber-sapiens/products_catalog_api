/* eslint-disable no-console */
'use strict';

import { detailsService } from '../services/Details';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const { namespaceId } = req.query;

  try {
    const products = await detailsService.getAll(namespaceId as string);

    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const foundProduct = await detailsService.getById(productId);

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

export const update = async(req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const foundProduct = await detailsService.getById(productId);

    if (!foundProduct) {
      res.sendStatus(404);

      return;
    }

    const productBody = req.body;

    if (Object.values(productBody).length === 0) {
      res.sendStatus(400);

      return;
    }

    const updatedProduct = await detailsService.update(productId, productBody);

    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newProduct = await detailsService.create(body);

    res.statusCode = 201;
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { productId } = req.params;
  const foundProduct = await detailsService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  await detailsService.remove(productId);
  res.sendStatus(204);
};

