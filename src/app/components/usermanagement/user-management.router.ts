import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './../../shared/guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
            {
                path: 'userdetails',
                component: UserdetailsComponent,
                data: {
                    breadcrumb: 'Edit -User',
                },
                canActivate: [AuthGuardService],
                canActivateChild: [AuthGuardService],
            },
            {
                path: '',
                component: UserlistComponent,
                canActivate: [AuthGuardService],
                canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: 'Users',
                },
            }
        ]
    },

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,]
})
export class UsermanagementRoutingModule { }
