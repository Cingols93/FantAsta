import { Component } from '@angular/core';
import { Constants } from 'src/app/core/utils/common-constants';
import { FantaApiService } from './core/services/fanta-api.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-sidenav (onToggleSideNav)="onToggleSideNav($event)"></app-sidenav>
    <app-body>
      [collapsed]="isSideNavCollapsed" [screenWidth]="screenWidth"
    </app-body>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FantAsta';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(){}

  // constructor(private fantaApiService: FantaApiService) {
  //   this.fantaApiService.players(
  //     Constants.SERIE_A_ID,
  //     Constants.YEAR_CURRENT_SEASON
  //   );
  // }
}
