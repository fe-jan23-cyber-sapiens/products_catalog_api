/* eslint-disable no-console */
'use strict';

const { Product } = require('../models/Product');
const { getNewId } = require('../getNewId');

const getAll = async(category) => {
  let products;

  if (category) {
    products = await Product.findAll({
      where: { category },
      order: ['id'],
    });
  } else {
    products = await Product.findAll({
      order: ['id'],
    });
  }

  return products;
};

const getById = (productId) => {
  return Product.findByPk(productId);
};

const update = (productId, productBody) => {
  return Product.update(productBody, {
    where: {
      id: productId,
    },
    returning: true,
  });
};

const create = async(productBody) => {
  const products = await getAll();

  const newProduct = {
    id: getNewId(products),
    ...productBody,
  };

  return Product.create(newProduct);
};

const remove = async(productId) => {
  return Product.destroy({
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
