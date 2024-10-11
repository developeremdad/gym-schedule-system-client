import { TUser } from "./user.types";

export interface TClassSchedule {
  _id: string;
  scheduleDate: Date;
  startTime: string;
  endTime: string;
  trainees: any[];
  maxTrainees: number;
  createdAt: Date;
  updatedAt: Date;
  trainer: string;
}

export interface TClassScheduleWithTrainee {
  _id: string;
  scheduleDate: Date;
  startTime: string;
  endTime: string;
  trainees: TUser[];
  maxTrainees: number;
  createdAt: Date;
  updatedAt: Date;
  trainer: string;
}
