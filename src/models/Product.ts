import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

export const Product = sequelize.define(
  'Product',
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phoneId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },

    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    fullPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    price: {
      type: DataTypes.STRING,
    },

    screen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacity: {
      type: DataTypes.STRING,
    },

    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ram: {
      type: DataTypes.STRING,
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'products',
  },
);

Product.sync({ alter: true });

