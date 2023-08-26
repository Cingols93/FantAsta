import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, DashboardComponent, BodyComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  exports: [SidenavComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
