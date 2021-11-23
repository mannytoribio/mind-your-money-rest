import { Router } from "express"
import { createSavings, getSavingsByUserId } from "../services/savings.services"
import { Savings } from "../models/Savings"

const savingsRouter = Router()

savingsRouter.post('/', async (req, res) => {
  let savings = req.body as Savings
  savings.savingsAmount = Number(savings.savingsAmount)
  const ret = await createSavings(savings)
  res.status(201).send(ret)
})

savingsRouter.get('/', async (req, res) => {
  const savings = await getSavingsByUserId(res.locals.userId)
  res.send(savings)
})

export default savingsRouter