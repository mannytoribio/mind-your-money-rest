import { ObjectId } from "mongodb";
import { Router } from "express";
import { createIncome, getIncomeById, updateIncomeById, deleteIncomeById } from "../services/income.services";
import { Income } from "../models/Income";

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

export default incomeRouter