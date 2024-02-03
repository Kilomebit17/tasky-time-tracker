import { Component, OnInit, inject } from '@angular/core';
import { TimesheetsTimerComponent } from '../../components/timesheets-timer/timesheets-timer.component';
import { TimesheetsInfoComponent } from '../../components/timesheets-info/timesheets-info.component';
import { CommonModule } from '@angular/common';
import { TimeService } from '../../modules/service/time.service';
import { TimeSheetsEmitData } from '../../components/timesheets-timer/timesheets-timer.interface';
import { TaskyHttpService } from '../../modules/service/tasky-http.service';
import { Tasks } from '../../modules/interfaces/tasky.interface';

@Component({
  selector: 'app-timesheets',
  standalone: true,
  imports: [CommonModule, TimesheetsTimerComponent, TimesheetsInfoComponent],
  templateUrl: './timesheets.component.html',
  styleUrl: './timesheets.component.scss',
  providers: [TimeService, TaskyHttpService],
})
export class TimesheetsComponent implements OnInit {
  public timeData: any[] = [];
  public timeService = inject(TimeService);
  public taskyHttpService = inject(TaskyHttpService);

  constructor() {}
  ngOnInit(): void {
    this.taskyHttpService.getAllTasks().subscribe({
      next: (response: Tasks[]) => {
        this.timeData = response;
      },
      error: (error) => {
        //TODO handle errors
      },
    });
  }
  public onHandleTimerData(time: TimeSheetsEmitData) {
    const { taskTitle, timeStart, timeEnd } = time;
    let timeBody = { //TODO Write Abstraction for body
      title: taskTitle,
      timestamp: new Date(),
      timeStart,
      timeEnd,
      userId: '7777',
    };
    this.taskyHttpService.createTask(timeBody).subscribe({
      next: (responce) => this.timeData.push(responce),
      error: (error) => {
        //TODO handle errors
      },
    });
  }
}