import { ObjectId } from "mongodb"
import { Router } from "express"
import { createExpense, getExpenseById } from "../services/expenses.services"
import { Expense } from "../models/Expenses"

const expenseRouter = Router()

expenseRouter.post('/', async (req, res) => {
  let expense = req.body as Expense
  const ret = await createExpense(expense)
  res.status(201).send(ret)
})

expenseRouter.get('/:id', async (req, res) => {
  const expense = await getExpenseById(new ObjectId(req.params.id))
  res.send(expense)
})