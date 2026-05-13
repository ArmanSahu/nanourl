import mongoose from 'mongoose';

export const connectDatabase = async() => {
    const MONGO_URI = process.env.MONGO_URI;
    if(!MONGO_URI){
        throw new Error("database url not found");
    }
    try{
        await mongoose.connect(MONGO_URI);
        console.log("connect to db");
    }catch(error){
        console.log("cannot connect to db: ",error);
        process.exit(1);
    }
}