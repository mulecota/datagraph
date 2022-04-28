// src/server.ts

import express from "express";
import config from "config";
import routes from "./routes";
import logger from "./logger";
import cors from 'cors';

const port = config.get("port") as number;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))

app.listen(port, () => {
    logger.info(`Server listing on port ${port}`);
    routes(app);
});
