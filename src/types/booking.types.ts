import { TClassSchedule } from "./classSchedule.type";

export interface TBooking {
  _id: string;
  classSchedule: TClassSchedule;
  trainee: string;
  trainer: string;
  bookingDate: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
