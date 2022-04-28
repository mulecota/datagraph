// config/default.ts
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001;

export default {
    port: PORT
}
