import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from "./auth.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {EventsService} from "./events.service";
import {AuthGuard} from "./auth.guard";
import {TokenInterceptor} from "./token.interceptor";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'special-events',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ResetPasswordComponent,
  ],
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(routes), HttpClientModule, RouterModule],
  providers: [ AuthService, EventsService, AuthGuard, {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
