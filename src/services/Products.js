'use strict';

const { Product } = require('../models/Product');
const { Op, Sequelize } = require('sequelize');

const getAll = async(category) => {
  let products;

  if (category) {
    products = await Product.findAll({
      where: { category },
      order: ['year'],
    });
  } else {
    products = await Product.findAll({
      order: ['year'],
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

const getRandom = async() => {
  const randomPhoneProducts = await Product.findAll({
    where: {
      category: {
        [Op.eq]: 'phones',
      },
    },
    order: Sequelize.literal('random()'),
    limit: 12,
  });

  return randomPhoneProducts;
};

const update = (productId, productBody) => {
  return Product.update(productBody, {
    where: {
      phoneId: productId,
    },
    returning: true,
  });
};

const create = async(productBody) => {
  const newProduct = {
    ...productBody,
  };

  return Product.create(newProduct);
};

const remove = async(productId) => {
  return Product.destroy({
    where: { phoneId: productId },
  });
};

module.exports = {
  getAll,
  getById,
  getNew,
  getRandom,
  getDiscount,
  create,
  update,
  remove,
};
