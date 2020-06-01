import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

/* Components */
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './../common/nav-bar/nav-bar.component';
import { MenulistComponent } from './../common/menulist/menulist.component';
import { FooterComponent } from './../common/footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingComponent } from '../setting/setting.component';
import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';

/* Module & Routing */
import { MaterialModule } from './../../matrial.module';
import { MainRouting } from './main-routing'

@NgModule({
    declarations: [
        MainPageComponent,
        NavBarComponent,
        MenulistComponent,
        FooterComponent,
        SettingComponent,
        DashboardComponent,
        BreadcrumbComponent],
    imports: [
        MainRouting,
        CommonModule,
        MaterialModule
    ]
})

export class MainRoutingModule { }