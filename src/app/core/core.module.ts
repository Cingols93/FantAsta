import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, SidenavComponent, RegistrationComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeaderComponent, LoginComponent, SidenavComponent],
})
export class CoreModule {}
