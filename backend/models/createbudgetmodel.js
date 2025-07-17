import mongoose from 'mongoose';
const { Schema } = mongoose;

const createbudgetSchema = new Schema({
  name:{type:String},
  income:{type:Number},
  startdate:{type:Date},
  enddate:{type:Date},
  Food:{type:Number},
  Transformation:{type:Number},
  Shopping:{type:Number},
  Bill:{type:Number},
  Entertainment:{type:Number},
  Education:{type:Number},
  Other:{type:Number},
})
const user = mongoose.model("createbudget", createbudgetSchema)
export default user;
