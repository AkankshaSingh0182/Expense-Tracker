import createbudgetSchema from "../models/createbudgetmodel.js";
export const CustomBudget = async (req, res) => {
  const { name, income, startdate, enddate } = req.body;
  const { Food, Transformation, Shopping, Bill, Entertainment, Education, Other } = req.body.categories;
console.log()
console.log(req.body);
const budget = await createbudgetSchema.create({
  name,
  income,
  startdate,
  enddate,
  Food,
  Transformation,
  Shopping,
  Bill,
  Entertainment,
  Education,
  Other,
})
console.log(budget);
return res.status(201).json({
  message: "Detail save successfully", budget
});

}
export const Getcreatebudget = async (req, res) => {
  const budget = await createbudgetSchema.find({});
  return res.status(200).json({
    message: "budget", budget
  });
}
