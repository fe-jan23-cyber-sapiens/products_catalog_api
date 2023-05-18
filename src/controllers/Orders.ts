/* eslint-disable no-console */
'use strict';

import { ordersService } from '../services/Orders';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const orders = await ordersService.getAll();

    res.send(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const foundOrder = await ordersService.getById(+orderId);

    if (!foundOrder) {
      res.sendStatus(404);

      return;
    }

    res.send(foundOrder);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const create = async(req: Request, res: Response) => {
  const body = req.body;

  try {
    const newOrder = await ordersService.create(body);

    res.statusCode = 201;
    res.send(newOrder);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const remove = async(req: Request, res: Response) => {
  const { orderId } = req.params;
  const foundOrder = await ordersService.getById(+orderId);

  if (!foundOrder) {
    res.sendStatus(404);

    return;
  }

  await ordersService.remove(+orderId);
  res.sendStatus(204);
};
