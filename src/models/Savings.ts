import { ObjectId } from "mongodb";

export interface Savings {
  _id?: ObjectId;
  savingsAmount: number;
  updated_at: Date;
  uid: string
}