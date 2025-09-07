import express from 'express';
import dotenv from 'dotenv';

const app = express()

dotenv.config();

app.get('/', (req, res) =>{
    res.send("Hello from the backend")
});
console.log("port:" ,process.env.PORT);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>{
    console.log("Server is up and running on port:", PORT)
})