import { Component } from '@angular/core';
import { Projects } from "./projects.mock";
import { ProjectsI } from "./projects.interface";
import { CommonModule } from "@angular/common";
import { TimeProgressBarComponent } from "../time-progress-bar/time-progress-bar.component";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule,TimeProgressBarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projectsData:ProjectsI[] = Projects

}
