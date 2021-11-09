import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Savings } from '../models/Savings'

const getSavingsCollection = async () => {
  const db = await getMongoClient()
  const col = db.collection<Savings>('savings')
  return col
}

export const createSavings = async (savings: Savings) => {
  const col = await getSavingsCollection()
  await col.insertOne(savings)
}

export const getSavingsById = async (id: ObjectId) => {
  const col = await getSavingsCollection()
  return col.findOne({_id: id})
}

export const updateSavingsById = async ( _id: ObjectId, savings: Savings) => {
  const col = await getSavingsCollection()
  const { savingsName, savingsAmount, updated_at } = savings
  return col.updateOne( {_id}, {$set: {savingsName, savingsAmount, updated_at }} )
}

export const deleteSavingsById = async ( id: ObjectId ) => {
  const col = await getSavingsCollection()
  return col.deleteOne( {_id: id} )
}