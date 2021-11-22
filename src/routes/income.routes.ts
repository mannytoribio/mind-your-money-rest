import { ObjectId } from "mongodb"
import { Router } from "express"
import { createIncome, getIncomeByUserId } from "../services/income.services"
import { Income } from "../models/Income"

const incomeRouter = Router()

incomeRouter.post('/', async (req, res) => {
  try {
    let income = req.body as Income
    const ret = await createIncome(income)
    res.status(201).send(ret)
  } 
  catch (err) {
    console.error("Did not work", err)
    res.status(500).send(err)
  }
})

incomeRouter.get('/', async (req, res) => {
  const income = await getIncomeByUserId(res.locals.userId)
  res.send(income)
})


export default incomeRouter