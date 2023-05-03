//5oyy55ZgWE5GWqks
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0.vytwced.mongodb.net/test`;

    mongoose.connect(MONGO_URI, { useNewUrlParser: true });

    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on("error", () => {
        console.log(
            "error while connecting with the database",
            error.message
        );
    });

    // here mongoose.connection.on -> it means on connection if got connected signal or disconnected or error ,,
    //('connected || disconnected || error', .....) keyword specific,
};

export default Connection;
