/* eslint-disable no-console */
'use strict';

import { Details } from '../models/Details';
import { DetailsType } from '../types/DetailsType';

const getAll = async(namespaceId: string) => {
  let products;

  if (namespaceId) {
    products = await Details.findAll({
      where: {
        namespaceId,
      },
    });
  } else {
    products = await Details.findAll();
  }

  return products;
};

const getById = (productId: string) => {
  return Details.findByPk(productId);
};

const update = (productId: string, productBody: Partial<DetailsType>) => {
  return Details.update(productBody, {
    where: {
      id: productId,
    },
    returning: true,
  });
};

const create = async(productBody: Partial<DetailsType>) => {
  return Details.create(productBody);
};

const remove = async(productId: string) => {
  return Details.destroy({
    where: { id: productId },
  });
};

export const detailsService = {
  getAll,
  getById,
  create,
  remove,
  update
};
