import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Expense } from '../models/Expenses'

const getExpensesCollection = async () => {
  const client = await getMongoClient()
  const db = client.db('MindYourMoney')
  const col = db.collection<Expense>('expenses')
  return col
}

export const createExpense = async (expense: Expense) => {
  const col = await getExpensesCollection()
  await col.insertOne(expense)
}

export const getIncomeById = async (id: ObjectId) => {
  const col = await getExpensesCollection()
  return col.findOne({_id: id})
}

export const updateExpenseById = async (_id: ObjectId, expense: Expense) => {
  const col = await getExpensesCollection()
  const { expenseDescription, expenseCategory, expenseAmount, expenseFrequency, updated_at} = expense
  return col.updateOne( {_id}, {$set: {expenseDescription, expenseCategory, expenseAmount, expenseFrequency, updated_at}})
}

export const deleteExpenseById = async (id: ObjectId) => {
  const col = await getExpensesCollection()
  return col.deleteOne( {_id: id} )
}