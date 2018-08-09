import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './appRouting';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './staff/dashboard/dashboard.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { SettingsComponent } from './staff/settings/settings.component';
import { LoaderComponent } from './loader/loader.component';
import { FilterPipe } from './staff/staff-details/searchPipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffDetailsComponent,
    LoginPageComponent,
    DashboardComponent,
    AddStaffComponent,
    SettingsComponent,
    LoaderComponent,
    FilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
