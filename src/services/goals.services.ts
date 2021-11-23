import { ObjectId } from 'mongodb'
import { getMongoClient } from '../gateway/mongoDB'
import { Goal } from '../models/Goals'

const getGoalCollection = async () => {
  const client = await getMongoClient()
  const db = client.db('MindYourMoney')
  const col = db.collection<Goal>('goals')
  return col
}

export const createGoal = async (goal: Goal) => {
  const col = await getGoalCollection()
  await col.insertOne(goal)
}

export const getGoalByUserId = async (uid: string) => {
  const col = await getGoalCollection()
  return col.find({uid: uid}).toArray();
}

export const updateGoalById = async (_id: ObjectId, goal: Goal) => {
  const col = await getGoalCollection()
  const { goalName, goalCost, goalDeadline, updated_at} = goal
  return col.updateOne({_id}, {goalName, goalCost, goalDeadline, updated_at})
}

export const deleteGoalById = async (id: ObjectId) => {
  const col = await getGoalCollection()
  return col.deleteOne({_id: id})
}