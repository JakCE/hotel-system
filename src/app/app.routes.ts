import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ConfigAppComponent } from './modules/config-app/config-app.component';
import { EstablecimientoComponent } from './modules/establecimiento/establecimiento.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: ConfigAppComponent },
    { path: 'app',
        component: DashboardComponent,
        children: [
            //{ path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'analytics', component: DashboardComponent },
            { path: 'crm', component: DashboardComponent },
            { path: 'reportes', component: DashboardComponent },
            { path: 'ventas', component: DashboardComponent },
            { path: 'app/**', redirectTo: 'login' },
        ]
    },
    { path: 'config',
        component: ConfigAppComponent,
        children: [
            //{ path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: 'establecimiento', component: EstablecimientoComponent },
        ]
    },
    { path: '**', redirectTo: 'app' },
];
