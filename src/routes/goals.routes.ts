import { ObjectId } from "mongodb"
import { Router } from "express"
import { createGoal, getGoalById } from "../services/goals.services"
import { Goal } from "../models/Goals"

const goalRouter = Router()

goalRouter.post('/', async (req, res) => {
  let goal = req.body as Goal
  const ret = await createGoal(goal)
  res.status(201).send(ret)
})

goalRouter.get('/:id', async (req, res) => {
  const goal = await getGoalById(new ObjectId(req.params.id))
  res.send(goal)
})

export default goalRouter