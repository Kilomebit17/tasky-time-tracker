import { CommonModule } from "@angular/common";
import { Component, inject } from '@angular/core';
import { MainTimerButtonComponent } from "../../components/main-timer-button/main-timer-button.component";
import { ActivitiesCardComponent } from "../../components/activities-card/activities-card.component";
import { ActivitiesData } from "./dashboard.mock";
import { Activities } from "./dashboard.interface";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { TimeService } from "../../modules/service/time.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MainTimerButtonComponent,ActivitiesCardComponent,ProjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers:[TimeService]
})
export class DashboardComponent {
  public activitiesData:Activities[] = ActivitiesData
  public timeService = inject(TimeService);
}
