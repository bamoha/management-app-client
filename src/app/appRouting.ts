import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './staff/dashboard/dashboard.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { AuthGuard } from './service/auth-guard.service';
import { SettingsComponent } from './staff/settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
    
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},


    {
        path: 'staffs', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            {path: '', redirectTo: 'staff-details', pathMatch: 'full'},
            {path: 'staff-details', component: StaffDetailsComponent},
            {path: 'add-staff', component: AddStaffComponent},
            {path: 'settings', component: SettingsComponent}
        ]
    },
       
    {path: 'login', component: LoginPageComponent},


  { path: '**',  component: NotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
