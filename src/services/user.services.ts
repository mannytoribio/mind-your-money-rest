import { ObjectId, Db } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { User } from '../models/User'

// let db: Db

export const getUserCollection = async () => {
  const client = await getMongoClient()
  const db = client.db('MindYourMoney')
  const col = db.collection<User>('users')
  return col
}

export const createUser = async (user: User) => {
  const col = await getUserCollection()
  await col.insertOne({user})
}

export const getUserByID = async (_id: ObjectId) => {
  const userCollection = await getUserCollection()
  const ret = userCollection.findOne(_id)
  return ret
}