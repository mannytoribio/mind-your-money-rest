import { ObjectId } from "mongodb"
import { Router } from "express"
import { createIncome, getIncomeById } from "../services/income.services"
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

incomeRouter.get('/:id', async (req, res) => {
  const income = await getIncomeById(new ObjectId(req.params.id))
  res.send(income)
})


export default incomeRouter