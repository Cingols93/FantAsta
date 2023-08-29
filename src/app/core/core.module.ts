import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routng.modules';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SidenavComponent,
    RegistrationComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, CoreRoutingModule],
  exports: [HeaderComponent, LoginComponent, SidenavComponent],
})
export class CoreModule {}
