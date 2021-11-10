import { ObjectId } from "mongodb";

export interface Income {
  _id?: ObjectId;
  incomeStream: string;
  incomeAmount: number;
  incomeFrequency: number;
  updated_at?: Date
  uid?: string
}