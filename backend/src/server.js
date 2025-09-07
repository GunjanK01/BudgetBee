import express from 'express';
import dotenv from 'dotenv';
import { initDB } from "./config/db.js";
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from "./routes/transactionsRoute.js";




const app = express();

dotenv.config();

app.use(express.json());
app.use(rateLimiter);



const PORT = process.env.PORT || 5001;


app.use("/api/transactions", transactionsRoute);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});