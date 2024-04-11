/*import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";


const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );

dbConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);



export default app; */

import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Initialize database connection
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRouter);

export default app;
