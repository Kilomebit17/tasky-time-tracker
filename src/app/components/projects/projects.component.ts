import { Component } from '@angular/core';
import { Projects } from "./projects.mock";
import { ProjectsI } from "./projects.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projectsData:ProjectsI[] = Projects
}
