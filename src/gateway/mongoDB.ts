import { MongoClient, Db } from "mongodb";

let db: Db

export const getMongoClient = async () => {
  if (!db) {
    const client = await new MongoClient('mongodb://localhost:27017').connect()
    db = client.db('MindYourMoney') 
  }

  return db
}