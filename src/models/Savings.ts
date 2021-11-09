import { ObjectId } from "mongodb";

export interface Savings {
  _id?: ObjectId;
  savingsName: string;
  savingsAmount: number;
}