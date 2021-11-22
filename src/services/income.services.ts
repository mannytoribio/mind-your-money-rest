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

export const getIncomeByUserId = async (uid: string) => {
  const col = await getIncomeCollection()
  //return col.find({incomeAmount: 2500}).toArray()
  return col.find({"uid": uid}).toArray()
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