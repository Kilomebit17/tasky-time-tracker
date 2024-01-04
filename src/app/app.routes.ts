import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'dashboard'},
    {path:'dashboard', loadComponent:() => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)},
    {path:'analytic', loadComponent:() => import('./pages/analytic/analytic.component').then(c => c.AnalyticComponent)},
    {path:'timesheets', loadComponent:() => import('./pages/timesheets/timesheets.component').then(c => c.TimesheetsComponent)}
];
