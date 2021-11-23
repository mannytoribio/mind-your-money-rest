import { Router } from "express"
import { createGoal, getGoalByUserId } from "../services/goals.services"
import { Goal } from "../models/Goals"

const goalRouter = Router()

goalRouter.post('/', async (req, res) => {
  let goal = req.body as Goal
  const ret = await createGoal(goal)
  res.status(201).send(ret)
})

goalRouter.get('/', async (req, res) => {
  const goal = await getGoalByUserId(res.locals.userId)
  res.send(goal)
})

export default goalRouter