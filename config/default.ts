// config/default.ts
import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.NODE_PORT,
    host: process.env.NODE_HOST,
  }