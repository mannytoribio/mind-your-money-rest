import { ObjectId } from "mongodb";

export interface Expense {
  _id?: ObjectId;
  expenseDescription: string;
  expenseCategory: string;
  expenseAmount: number;
  expenseFrequency: number
}