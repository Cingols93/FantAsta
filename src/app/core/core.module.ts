import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, SidenavComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeaderComponent, LoginComponent, SidenavComponent],
})
export class CoreModule {}
