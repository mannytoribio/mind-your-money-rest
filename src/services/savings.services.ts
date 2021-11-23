import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Savings } from '../models/Savings'

const getSavingsCollection = async () => {
  const client = await getMongoClient()
  const db = client.db('MindYourMoney')
  const col = db.collection<Savings>('savings')
  return col
}

export const createSavings = async (savings: Savings) => {
  const col = await getSavingsCollection()
  await col.insertOne(savings)
}

export const getSavingsByUserId = async (uid: string) => {
  const col = await getSavingsCollection()
  return col.find({uid: uid}).toArray();
}

export const updateSavingsById = async ( _id: ObjectId, savings: Savings) => {
  const col = await getSavingsCollection()
  const { savingsAmount } = savings
  return col.updateOne( {_id}, {$set: { savingsAmount }} )
}

export const deleteSavingsById = async ( id: ObjectId ) => {
  const col = await getSavingsCollection()
  return col.deleteOne( {_id: id} )
}