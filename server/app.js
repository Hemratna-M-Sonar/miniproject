import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config()

const app = express()
const port = process.env.PORT 

app.use(cors());

const DATABASE_URL = process.env.DATABASE_URL
connectDb(DATABASE_URL);

app.use(express.json());

// app.use("/api/user/register", (req, res) => {
//     res.send("HElllo")
// })

// load routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})