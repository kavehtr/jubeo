import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/userSchema";
import dotenv from "dotenv";

dotenv.config();

// const databaseConfig = {
//   type: process.env.DATABASE_TYPE,
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
// };

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "undefined",
  password: "1",
  database: "jubeo",
  entities: [User],
  synchronize: true,
  logging: false,
});
