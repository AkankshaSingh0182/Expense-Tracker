import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String
  }
})
const user = mongoose.model("User", userSchema)
export default user;