import { CommonModule } from "@angular/common";
import { Component, OnDestroy } from '@angular/core';
import { pauseTimerImage, playTimerImage } from "./main-timer.mock";
import { Subscription, interval } from "rxjs";

@Component({
  selector: 'main-timer-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-timer-button.component.html',
  styleUrl: './main-timer-button.component.scss'
})
export class MainTimerButtonComponent implements OnDestroy{
  public isLaunched = false;
  
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  private subscription: Subscription | undefined;
  public handleTimer() {
    this.isLaunched = !this.isLaunched;
    if(this.isLaunched) {
      this.startTimer()
    }
    if(!this.isLaunched) {
      this.stopTimer()
    }

  }
  public getTimerImage() {
    return this.isLaunched ? pauseTimerImage  : playTimerImage
  }
  private startTimer() {
    this.subscription = interval(1000).subscribe((value) => {
      this.updateTime();
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
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
  private stopTimer() {
    this.subscription?.unsubscribe()
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

}
