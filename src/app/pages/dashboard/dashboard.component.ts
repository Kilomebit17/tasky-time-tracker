import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { MainTimerButtonComponent } from "../../components/main-timer-button/main-timer-button.component";
import { ActivitiesCardComponent } from "../../components/activities-card/activities-card.component";
import { ActivitiesData } from "./dashboard.mock";
import { Activities } from "./dashboard.interface";
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MainTimerButtonComponent,ActivitiesCardComponent,ProjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public activitiesData:Activities[] = ActivitiesData
  public get getDate() {
    return new Date()
  }
}
