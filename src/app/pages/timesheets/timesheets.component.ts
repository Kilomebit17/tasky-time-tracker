import { Component, inject } from '@angular/core';
import { TimesheetsTimerComponent } from "../../components/timesheets-timer/timesheets-timer.component";
import { TimesheetsInfoComponent } from "../../components/timesheets-info/timesheets-info.component";
import { CommonModule } from "@angular/common";
import { TimeService } from "../../modules/service/time.service";
import { TimeSheetsEmitData } from "../../components/timesheets-timer/timesheets-timer.interface";

@Component({
  selector: 'app-timesheets',
  standalone: true,
  imports: [CommonModule,TimesheetsTimerComponent,TimesheetsInfoComponent],
  templateUrl: './timesheets.component.html',
  styleUrl: './timesheets.component.scss',
  providers:[TimeService]
})
export class TimesheetsComponent {
    public timeData:any[] = [];
    public timeService = inject(TimeService);

    constructor() {}

    public onHandleTimerData(time:TimeSheetsEmitData) {
      const {task,startTime,endTime} = time
      let timeBody = {
        task:task,
        time:this.timeService.calcDifferenceTime(startTime,endTime)
      }
      debugger;
      this.timeData.push(timeBody)
    }
    
}
