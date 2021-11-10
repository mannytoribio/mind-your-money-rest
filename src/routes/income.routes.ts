import { ObjectId } from "mongodb";
import { Router } from "express";
import { createIncome, getIncomeById, updateIncomeById, deleteIncomeById } from "../services/income.services";
import { Income } from "../models/Income";

export const incomeRouter = Router()

incomeRouter.post('/:uid', async (req, res) => {
  let income = req.body as Income
  const ret = await createIncome(income)
  console.log(ret)
  res.send().status(201)
})