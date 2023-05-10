'use strict';

const { Product } = require('../models/Product');
const { getNewId } = require('../getNewId');
const { Op } = require('sequelize');

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

const getNew = async() => {
  const latestProducts = await Product.findAll({
    order: [['year', 'DESC']],
    limit: 12,
  });

  return latestProducts;
};

const getDiscount = async() => {
  const discountedProducts = await Product.findAll({
    where: {
      price: {
        [Op.not]: null,
      },
    },
    order: [['createdAt', 'DESC']],
    limit: 12,
  });

  return discountedProducts;
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
  getNew,
  getDiscount,
  create,
  update,
  remove,
};
