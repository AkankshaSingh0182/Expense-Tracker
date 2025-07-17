import mongoose from "mongoose";
const connectdb = async() =>{
    try {
        await mongoose.connect('mongodb+srv://sachinsingh9272:8JSFr7d6qvjNUwnV@databases.0nr1tnl.mongodb.net/expense-tracker');
        console.log("Database connected");
    } catch (error) {
        console.log("Error in connecting database")
    }
}

export default connectdb;