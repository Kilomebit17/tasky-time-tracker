import { Component, inject } from '@angular/core';
import { Custom, DefaultIcon } from "../../constants/constants";
import { NavigationEnd, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MayString, MenuI } from "./side-menu.mock";
import { MENU, Routes } from "./side-menu.interface";
import { filter } from "rxjs";

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  public menu: MenuI[] = MENU;
  public activeRoute: string | null = null;
  public defaultIcon: string = DefaultIcon

  private router: Router = inject(Router)
  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: Custom) => {
        this.activeRoute = event?.url !== '/' ? event?.url : Routes.dashboard as string;
      })
  }

  public onMenuNavigate(route: string) {
    this.activeRoute = route;
    this.router.navigate([`${route}`]);
  }
  public getMenuIcon(route: string, icon: MayString, active: MayString): MayString {
    return route === this.activeRoute ? (active ?? DefaultIcon) : (icon ?? DefaultIcon)
  }
}
