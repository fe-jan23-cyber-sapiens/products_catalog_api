/* eslint-disable no-console */
'use strict';

import { Order } from '../models/Order';
import { Order as OrderType } from '../types/OrderType';

const getAll = async() => {
  const orders = await Order.findAll();

  return orders;
};

const getById = (orderId: number) => {
  return Order.findByPk(orderId);
};

const create = async(productBody: Partial<OrderType>) => {
  return Order.create(productBody);
};

const remove = async(orderId: number) => {
  return Order.destroy({
    where: { orderId },
  });
};

export const ordersService = {
  getAll,
  getById,
  create,
  remove,
};
