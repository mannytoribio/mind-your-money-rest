import { MongoClient } from "mongodb";
import { MONGO_URL } from './dbConfig'


let _client: MongoClient

export const getMongoClient = async () => {
  if (!_client) {
    _client = new MongoClient(MONGO_URL)
    _client = await _client.connect()
  }
  return _client

}
