import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TimeService } from './time.service';
import { Task, Tasks } from '../interfaces/tasky.interface';
import { Custom } from '../../constants/constants';

@Injectable()
export class TaskyHttpService {
  constructor(private http: HttpClient, private timeService: TimeService) {}
  //TODO add new types
  getAllTasks(): Observable<Tasks[]> {
    return this.http.get(`${environment.API_URL}task/list`).pipe(
      map((response: Custom) => {
        const tasks = this.groupTaskByTimestamp(response);
        return this.parseTaskResponse(tasks);
      })
    );
  }
  createTask(body: any): Observable<Tasks> {
    return this.http
      .post(`${environment.API_URL}task/create`, body)
      .pipe(map((response: any) => this.parseTaskResponse(response)));
  }

  private parseTaskResponse(tasks: Task): any {
    //TODO Write parse service
    return Object.entries(tasks).map(([key, value]) => {
      const tasks = this.parseTask(value)
      return {
        timestamp: new Date(key),
        tasks,
        totalTime:this.timeService.calcTotalTime(tasks)
      };
    });
  }
  private parseTask(tasks: Task[]): Tasks[] {
    return tasks.map((task: Task) => {
      const { timeStart, timeEnd, timestamp, title, taskId } = task;
      return {
        timestamp,
        task: {
          title,
          taskId,
          time: this.timeService.calcDifferenceTime(
            new Date(timeStart),
            new Date(timeEnd)
          ),
        },
      };
    });
  }
  private groupTaskByTimestamp(data: Task[]) {
    const result = data.map((task) => {
      const { timestamp } = task;
      const date = new Date(timestamp);
      const fullDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      return { ...task, fullDate };
    });
    //@ts-ignore
    return Object.groupBy(result, (res: any) => res.fullDate);
  }
}
