const mongoose = require('mongoose');
//async functions are mostly used while dealing with databases
//this function is used to connect to the database
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;