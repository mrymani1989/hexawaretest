import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { DataTableModule } from 'ng-angular8-datatable';

/* Modules */
import { UsermanagementRoutingModule } from './user-management.router'
import { MaterialModule } from './../../matrial.module';

/* Components */
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component'

@NgModule({
    declarations: [UserdetailsComponent, UserlistComponent, UserComponent],
    imports: [
        UsermanagementRoutingModule,
        DataTableModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ]
})
export class UsermanagementModule { }
