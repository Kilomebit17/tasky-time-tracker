import { Component  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule,UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
