import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BannersComponent } from './banners/banners.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {BackendApiService} from './backend-api.service';

const appRoutes: Routes = [
  { path: 'login', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
