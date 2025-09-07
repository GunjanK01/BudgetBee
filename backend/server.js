import express from 'express';
import dotenv from 'dotenv';
import { initDB } from "./config/db.js";
import { sql } from "./config/db.js";
import rateLimiter from './middleware/rateLimiter.js';




const app = express();

dotenv.config();

app.use(express.json());
app.use(rateLimiter);



const PORT = process.env.PORT || 5001;

app.get("/api/transactions/:userId", async (req, res) => {
    try {
        const {userId} = req.params;

        const transactions = await sql`
            SELECT * FROM transactions
            WHERE user_id = ${userId}
            ORDER BY created_at DESC
        `;
        
        res.status(200).json(transactions);
        
    } catch (error) {
        console.log("Error getting the transaction", error);
        res.status(500).json({message: "Internal server error"});
    }
})


app.post("/api/transactions", async (req, res) => {
    try {
        const {title, amount, category, user_id} = req.body;

        if(!title || !user_id || !category || amount === undefined) {
            return res.status(400).json({message: "All fields are required"});
        }

       const transaction = await sql`
            INSERT INTO transactions(user_id,title,amount,category)
            VALUES (${user_id},${title},${amount},${category} )
            RETURNING *
        `;
        console.log(transaction);
        res.status(201).json(transaction[0]);

    } catch (error) {
        console.log("Error creating the transaction", error);
        res.status(500).json({message: "Internal server error"});
    }
});

app.delete("/api/transactions/:id", async (req, res) => {
    try {
        
        const {id} = req.params;    

       const result =  await sql`
            DELETE FROM transactions
            WHERE id = ${id}
            RETURNING *
        `;

        if(result.length === 0) { 
            return res.status(404).json({message: "Transaction not found"}); 
    }
        res.status(200).json({message: "Transaction deleted successfully"});

    } catch (error) {
        console.log("Error deleting the transaction", error);
        res.status(500).json({message: "Internal server error"});
    }
})

app.get("/api/transactions/summary/:userId", async (req, res) => {
    try {
    const { userId } = req.params;

    const balanceResult = await sql`
      SELECT COALESCE(SUM(amount), 0) as balance FROM transactions WHERE user_id = ${userId}
    `;

    const incomeResult = await sql`
      SELECT COALESCE(SUM(amount), 0) as income FROM transactions
      WHERE user_id = ${userId} AND amount > 0
    `;

    const expensesResult = await sql`
      SELECT COALESCE(SUM(amount), 0) as expenses FROM transactions
      WHERE user_id = ${userId} AND amount < 0
    `;

    res.status(200).json({
      balance: balanceResult[0].balance,
      income: incomeResult[0].income,
      expenses: expensesResult[0].expenses,
    });
  } catch (error) {
    console.log("Error gettin the summary", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});