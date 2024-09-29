import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db/connectDb.js";
import userRoutes from './routes/userRoutes.js'
dotenv.config();


const app = express();

const port = 3001;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.send("Hello, World!");
});
connectDB();

// app.get("/users", (req, res) => {
// 	// Sample data for the users
// 	const users = [
// 		{ id: 1, name: "Harsh Srivastava", email: "harsh@example.com" },
// 		{ id: 2, name: "Prince", email: "prince@example.com" },
// 		{ id: 3, name: "Rohit sharma", email: "rohit@example.com" },
// 	];

// 	res.json(users);
// });
app.use("/api/users" ,userRoutes )

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
