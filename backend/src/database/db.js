// import mongoose from "mongoose";

// const db = async() => {
//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/eLearning`)
//         console.log(`\n MongoDB connected !! DB HOST :: ${connectionInstance.connection.host}`)
//     } catch (error){
//         console.log("Mongodb connection error", error);
//         process.exit(1)
//     }
// }



// export default db;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Ensure environment variables are loaded

const MONGODB_URI = process.env.MONGODB_URI;

export const db = async () => {
    try {
        if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined in .env file");

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // Stop the server if DB connection fails
    }
};
