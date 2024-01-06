import { Component, inject } from '@angular/core';
import { DefaultIcon } from "../../constants/constants";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MayString, MenuI } from "./side-menu.mock";
import { MENU, Routes } from "./side-menu.interface";

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
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
