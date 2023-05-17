'use strict';

import { Product } from '../models/Product';
import { Op, Sequelize } from 'sequelize';
import { ProductType } from "../types/ProductType";

const getAll = async(category: string) => {
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

export const getById = (productId: string) => {
  return Product.findByPk(productId);
};

const getNew = async() => {
  const latestProducts = await Product.findAll({
    order: [['year', 'DESC']],
    limit: 20,
  });

  return latestProducts;
};

const getDiscount = async() => {
  const discountedProducts = await getAll();

  const discountedProductsDESC = discountedProducts.sort(
    (product1, product2) => {
      const firstDiscount = product1.fullPrice - Number(product1.price);
      const secondDiscount = product2.fullPrice - Number(product2.price);

      return secondDiscount - firstDiscount;
    },
  );

  const uniqueProducts = [];

  for (const product of discountedProductsDESC) {
    const phoneModel = product.phoneId.split('-').slice(0, -2).join('-');

    if (!uniqueProducts.some(
      uniqueProduct => uniqueProduct.phoneId
        .split('-')
        .slice(0, -2)
        .join('-') === phoneModel,
    )) {
      uniqueProducts.push(product);
    }
  }

  return uniqueProducts;
};

const getRandom = async() => {
  const randomPhoneProducts = await Product.findAll({
    where: {
      category: {
        [Op.eq]: 'phones',
      },
    },
    order: Sequelize.literal('random()'),
    limit: 20,
  });

  return randomPhoneProducts;
};

const update = (productId: string, productBody: Partial<ProductType>) => {
  return Product.update(productBody, {
    where: {
      phoneId: productId,
    },
    returning: true,
  });
};

const create = async(productBody: ProductType) => {
  const newProduct = {
    ...productBody,
  };

  return Product.create(newProduct);
};

const remove = async(productId: string) => {
  return Product.destroy({
    where: { phoneId: productId },
  });
};

export const productsService = {
  getAll,
  getById,
  getNew,
  getDiscount,
  getRandom,
  update,
  create,
  remove,
};


