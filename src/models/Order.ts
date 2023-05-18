import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

export const Order = sequelize.define(
  'Order',
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    products: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    updatedAt: false,
  },
)

Order.sync({ alter: true });
