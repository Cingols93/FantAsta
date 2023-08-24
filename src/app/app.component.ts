import { Component } from '@angular/core';
import { FantaApiService } from './services/fanta-api.service';

@Component({
  selector: 'app-root',
  template: ``,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FantAsta';

  constructor(private fantaApiService: FantaApiService) {
    this.fantaApiService.players();
  }
}
