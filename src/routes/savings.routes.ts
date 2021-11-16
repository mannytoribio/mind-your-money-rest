import { ObjectId } from "mongodb"
import { Router } from "express"
import { createSavings, getSavingsById } from "../services/savings.services"
import { Savings } from "../models/Savings"

const savingsRouter = Router()

savingsRouter.post('/', async (req, res) => {
  let savings = req.body as Savings
  const ret = await createSavings(savings)
  res.status(201).send(ret)
})

savingsRouter.get('/:id', async (req, res) => {
  const savings = await getSavingsById(new ObjectId(req.params.id))
  res.send(savings)
})