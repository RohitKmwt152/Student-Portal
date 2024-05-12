import { Routes } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { authGuardGuard } from "./auth/auth-gaurd.gaurd";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
        canMatch: [authGuardGuard]
    }
];
