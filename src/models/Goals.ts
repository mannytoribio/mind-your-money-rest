import { ObjectId } from "mongodb";

export interface Goal {
  _id?: ObjectId;
  goalName: string;
  goalCost: number;
  goalDeadline: Date;
  updated_at: Date
}