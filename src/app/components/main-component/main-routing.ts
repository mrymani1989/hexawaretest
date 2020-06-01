import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { SettingComponent } from '../setting/setting.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardService } from './../../shared/guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
            {
                path: '',
                component: DashboardComponent,
                canActivate: [AuthGuardService],
                canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: 'Dashboard',
                }
            },
            {
                path: 'users',
                loadChildren: () => import(`./../usermanagement/user-management-module`).then(m => m.UsermanagementModule),
                canActivate: [AuthGuardService],
                canActivateChild: [AuthGuardService],
            },
            {
                path: 'settings',
                component: SettingComponent,
                canActivate: [AuthGuardService],
                canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: 'Settings',
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class MainRouting { }