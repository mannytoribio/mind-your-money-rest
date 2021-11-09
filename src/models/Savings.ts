import { ObjectId } from "mongodb";

export interface Savings {
  _id?: ObjectId;
  savingsName: string;
  savingsAmount: number;
  updated_at: Date;
  uid: string
}