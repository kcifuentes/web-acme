import {Component} from '@angular/core';
import {SplashScreenService} from '@share/services/splash-screen.service';

@Component({
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-acme';

  constructor(private splashScreen: SplashScreenService) {
  }
}
