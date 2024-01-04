import { MenuI } from "./header.interface";

export enum Routes {
    dashboard = 'dashboard',
    analytic = 'analytic',
    timesheets = 'timesheets',
}
export const MENU:MenuI[] = [
    {name:'Dashboard',route:`${Routes.dashboard}`,icon:'/assets/icons/header-menu/dashboard-icon.png',iconActive:'/assets/icons/header-menu/dashborad-icon-active.png'},
    {name:'Analytic',route:`${Routes.analytic}`,icon:'/assets/icons/header-menu/analytic-icon.png',iconActive:'/assets/icons/header-menu/analytic-icon-active.png'},
    {name:'Timesheets',route:`${Routes.timesheets}`,icon:'/assets/icons/header-menu/timesheets-icon.png',iconActive:'/assets/icons/header-menu/timesheets-icon-active.png'},
]
