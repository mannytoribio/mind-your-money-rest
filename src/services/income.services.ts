import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Income } from '../models/Income'

const getIncomeCollection = async () => {
  const db = await getMongoClient()
  const col = db.collection<Income>('income')
  return col
}

export const createIncome = async (income: Income) => {
  const col = await getIncomeCollection()
  await col.insertOne(income)
}

export const getIncomeById = async (id: ObjectId) => {
  const col = await getIncomeCollection()
  return col.findOne({_id: id})
}