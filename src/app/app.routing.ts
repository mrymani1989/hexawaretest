
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/guard/auth-guard.service';

import { Routes } from '@angular/router'

const Routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./components/authentication/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('./components/main-component/main-routing.module').then(m => m.MainRoutingModule),
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
