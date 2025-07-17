import budgetSchema from "../models/budgetmodel.js";
export const NewExpense = async (req, res) => {
  const { date, category, amount, description } = req.body.expense;
  console.log(req.body);
  const { userId } = req.params
  const newUser = await budgetSchema.create({
    date,
    category,
    amount,
    description,
    userId
  })
  console.log(newUser);
  return res.status(201).json({
    message: "Detail save successfully", newUser
  });
}

export const DeleteExpense = async (req, res) => {
  const { id } = req.params;
  const deletedExpense = await budgetSchema.findByIdAndDelete(id);
  return res.status(200).json({
    message: "Details delete  successfully", deletedExpense
  });

}

export const Update = async (req, res) => {
  const { id } = req.params;
  budgetSchema = await budgetSchema.create({
    id,
  })
}
export const GetExpense = async (req, res) => {
  const { userId } = req.params;
  const expenses = await budgetSchema.find({ userId });
  return res.status(200).json({
    message: "Expenses", expenses
  });
}


