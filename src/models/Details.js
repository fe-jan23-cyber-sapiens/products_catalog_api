'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const Details = sequelize.define(
  'Details',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    namespaceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacityAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    priceRegular: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    priceDiscount: {
      type: DataTypes.INTEGER,
    },

    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    description: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    screen: {
      type: DataTypes.STRING,
    },

    resolution: {
      type: DataTypes.STRING,
    },

    processor: {
      type: DataTypes.STRING,
    },

    ram: {
      type: DataTypes.STRING,
    },

    camera: {
      type: DataTypes.STRING,
    },

    zoom: {
      type: DataTypes.STRING,
    },

    cell: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    tableName: 'productDetails',
    createdAt: false,
    updatedAt: false,
  },
);

Details.sync({ alter: true });

module.exports = {
  Details,
};
