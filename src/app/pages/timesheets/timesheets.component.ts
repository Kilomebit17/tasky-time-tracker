import { Component } from '@angular/core';
import { TimesheetsTimerComponent } from "../../components/timesheets-timer/timesheets-timer.component";
import { TimesheetsInfoComponent } from "../../components/timesheets-info/timesheets-info.component";

@Component({
  selector: 'app-timesheets',
  standalone: true,
  imports: [TimesheetsTimerComponent,TimesheetsInfoComponent],
  templateUrl: './timesheets.component.html',
  styleUrl: './timesheets.component.scss'
})
export class TimesheetsComponent {
    public timeData:any[] = [];


    public setTime(time:any) {
      this.timeData.push(time);
    }
    
}
