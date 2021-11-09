import { MongoClient, Db } from "mongodb";

let db: Db

export const getMongoClient = async () => {
  if (!db) {
    const client = new MongoClient('mongodb://localhost:27017')
    
    db = client.db('MindYourMoney') 
  }

  return db
}
