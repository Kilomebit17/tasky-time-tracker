import { TimeI } from './time.interface';
export interface Tasks {
  timestamp: Date | string;
  task: {
    title: string;
    taskId: string;
    time: TimeI;
  };
}
export interface Task {
  timestamp: Date | string;
  title: string;
  taskId: string;
  timeStart: Date | string;
  timeEnd: Date | string;
}
