/* eslint-disable no-console */
'use strict';

const detailsService = require('../services/Details');

const getAll = async(req, res) => {
  try {
    const products = await detailsService.getAll();

    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getOne = async(req, res) => {
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

const update = async(req, res) => {
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

    const updatedProduct = await detailsService.update(
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
    const newProduct = await detailsService.create(body);

    res.statusCode = 201;
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const remove = async(req, res) => {
  const { productId } = req.params;
  const foundProduct = await detailsService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  await detailsService.remove(productId);
  res.sendStatus(204);
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
