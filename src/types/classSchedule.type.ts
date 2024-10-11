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
