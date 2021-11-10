import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Income } from '../models/Income'

const getIncomeCollection = async () => {
  const client = await getMongoClient()
  const db = client.db('MindYourMoney')
  const col = db.collection<Income>('income')
  return col
}

export const createIncome = async (income: Income) => {
  const col = await getIncomeCollection()
  const response = await col.insertOne(income)
  return response
}

export const getIncomeById = async (id: ObjectId) => {
  const col = await getIncomeCollection()
  return col.findOne({_id: id})
}

export const updateIncomeById = async ( _id: ObjectId, income: Income) => {
  const col = await getIncomeCollection()
  const { incomeStream, incomeAmount, incomeFrequency, updated_at } = income
  return col.updateOne( {_id}, {$set: {incomeStream, incomeAmount, incomeFrequency, updated_at}} )
}

export const deleteIncomeById = async ( id: ObjectId ) => {
  const col = await getIncomeCollection()
  return col.deleteOne( {_id: id} )
}