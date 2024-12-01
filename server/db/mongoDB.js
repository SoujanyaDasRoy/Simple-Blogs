import mongoose from "mongoose";

const MongoConnect = async()=>{
    try {
        const mongoConnection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${mongoConnection.connection.host}`.cyan.underline);
        
    } catch (error) {
        console.error(`Error: ${error.message}`.red);
        process.exit(1); // Exit the process with failure
    }
}

export default MongoConnect;