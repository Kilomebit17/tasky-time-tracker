import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { MainTimerButtonComponent } from "../../components/main-timer-button/main-timer-button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MainTimerButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
