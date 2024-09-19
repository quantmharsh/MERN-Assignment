import express from "express";
import cors from 'cors';



const app = express();

const port = 3001;
app.use(cors());
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/users", (req, res) => {
	// Sample data for the users
	const users = [
		{ id: 1, name: "Harsh Srivastava", email: "harsh@example.com" },
		{ id: 2, name: "Prince", email: "prince@example.com" },
		{ id: 3, name: "Rohit sharma", email: "rohit@example.com" },
	];

	res.json(users);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
