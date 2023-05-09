/* eslint-disable no-console */
'use strict';

const productsService = require('../services/Products');

const getAll = async(req, res) => {
  try {
    const { category } = req.query;

    const products = await productsService.getAll(category);

    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const update = async(req, res) => {
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

    const updatedProduct = await productsService.update(
      productId,
      productBody,
    );

    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const create = async(req, res) => {
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

const remove = async(req, res) => {
  const { productId } = req.params;
  const foundProduct = await productsService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  await productsService.remove(productId);
  res.sendStatus(204);
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};
