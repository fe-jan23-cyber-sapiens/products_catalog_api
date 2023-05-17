import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.URI) {
  throw new Error("Database URI not found in environment variables");
}

export const sequelize = new Sequelize(process.env.URI, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

