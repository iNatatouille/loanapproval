import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
	// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
	await mongoose.connect(uri);
	console.log("Pinged your deployment. You successfully connected to MongoDB!");
};

export default connectDB;
