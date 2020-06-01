import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginRouterModule } from './login.routing';
import { MaterialModule } from './../../matrial.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        LoginRouterModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule

    ]
})
export class LoginModule { }
