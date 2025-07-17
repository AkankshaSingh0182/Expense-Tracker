import mongoose from 'mongoose';
const { Schema } = mongoose;

const budgetSchema = new Schema({
 
  date:{type:Date},
  category:{type: String},
  amount:{type:Number},
  description:{type:String},
  userId:{type:mongoose.Types.ObjectId,ref:"User"}
})
const user = mongoose.model("budget", budgetSchema)
export default user;