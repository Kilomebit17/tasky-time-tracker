import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Custom, pauseTimer, startTimer, taskLabel } from "../../constants/constants";
import { Subscription, interval } from "rxjs";

@Component({
  selector: 'timesheets-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timesheets-timer.component.html',
  styleUrl: './timesheets-timer.component.scss'
})
export class TimesheetsTimerComponent {
  public isTimerLaunched = false;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public taskPlaceholder:string = taskLabel;
  public task:string = '';
  public isError = false;
  private subscription:Subscription = new Subscription()
  public emitter = new EventEmitter<any>()
  private emitData = {
    task:'',
    timerStart:'',
    timerEnd:'',
  }
  
  public handleTimerEvent() {
    if(!this.isValided()) return;

    this.isTimerLaunched = !this.isTimerLaunched
    if(this.isTimerLaunched) {
      this.startTimer()
    }
    if(!this.isTimerLaunched) {
      this.stopTimer()
    }
  }
  public getTimerImage() {
    return this.isTimerLaunched ? pauseTimer  : startTimer
  }
  public inputEvent({value}:Custom) {
    this.task = value as string;
    this.isError = false; 
  }
  private startTimer() {
    this.subscription = interval(1000).subscribe((value) => {
      this.updateTime();
    });
  }
  private isValided() {  
    let isValided = true
    if(this.task === '' && this.isTimerLaunched) {
      isValided = false;
      this.isError = true;
      return;
    }
    return isValided
  }
  private stopTimer() {
    if(!this.isValided()) {
      this.isError = true;
      return
    };
    if(this.task !== '') {
      this.subscription?.unsubscribe()
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;

      this.emitter.emit(this.emitData);
    }
  }
  private updateTime() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
  }
}
