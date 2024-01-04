import { Component, inject } from '@angular/core';
import { MENU, Routes } from "./header.mock";
import { MayString, MenuI } from "./header.interface";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { DefaultIcon } from "../../constants/constants";

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menu:MenuI[] = MENU;
  public activeRoute:string = Routes.dashboard;
  public defaultIcon:string = DefaultIcon

  private router:Router = inject(Router)

  public onMenuNavigate(route:string) {
    this.activeRoute = route;
    this.router.navigate([`/${route}`]);
  }
  public getMenuIcon(route:string,icon:MayString,active:MayString):MayString {
    return route === this.activeRoute ? (active ?? DefaultIcon) : (icon ?? DefaultIcon)
  }
}
