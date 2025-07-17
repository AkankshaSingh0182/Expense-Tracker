import express from 'express';
import connectdb from './config/db.js';
import { Login, Register } from './controllers/userControllers.js';
import cors from 'cors';
import { NewExpense, GetExpense, DeleteExpense } from './controllers/budgetController.js';
import { CustomBudget,Getcreatebudget } from './controllers/CreatebudgetController.js';

const app = express()
const port = 3000

app.use(express.json());
app.use(cors("*"));
connectdb();

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',Register);
app.post('/Login',Login);
app.post('/NewExpense/:userId',NewExpense)
app.get('/getExpenses/:userId', GetExpense)
app.post('/CustomBudget',CustomBudget)
app.delete('/deleteExpense/:id', DeleteExpense)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/getCustombudget',Getcreatebudget)
