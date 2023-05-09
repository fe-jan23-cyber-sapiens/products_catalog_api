/* eslint-disable no-console */
'use strict';

const { Details } = require('../models/Details');

const getAll = async() => {
  const products = await Details.findAll();

  return products;
};

const getById = (productId) => {
  return Details.findByPk(productId);
};

const update = (productId, productBody) => {
  return Details.update(productBody, {
    where: {
      id: productId,
    },
    returning: true,
  });
};

const create = async(productBody) => {
  return Details.create(productBody);
};

const remove = async(productId) => {
  return Details.destroy({
    where: { id: productId },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
