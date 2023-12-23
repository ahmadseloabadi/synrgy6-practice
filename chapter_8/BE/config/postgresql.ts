import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const knexInstance = knex({
  client: process.env.DB_CLIENT,
  connection: {
    // host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // port: Number(process.env.DB_PORT),
  },
});

export default knexInstance;
