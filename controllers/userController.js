import connectDB from "../db/connectDb.js";
import { User } from "../models/user.model.js";

const insertUser = async () => {
	try {
		// Connect to the database
		await connectDB();

		// New user data to insert
		const newUser = {
			name: "Harsh Srivastava",
			email: "Harsh@example.com",
			age: 30,
		};

		// Insert the new user into the collection
		const user = await User.create(newUser);

		console.log("New user inserted:", user);

		// Close the database connection
		process.exit(0); // Graceful exit
	} catch (error) {
		console.error("Error inserting user:", error);
		process.exit(1);
	}
};

// Run the insertUser function

const getbyemail = async (req, res) => {
	try {
		await connectDB();

		const { email } = req.body;

		if (!email) {
			return res.status(400).json({ message: "Email is required" });
		}

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json(user);
	} catch (error) {
		console.error("Error fetching user:", error);
		res.status(500).json({ message: "Server error" });
	}
};
export { insertUser, getbyemail };
