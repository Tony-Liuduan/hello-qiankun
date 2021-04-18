import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#rootangular app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-child-angular';

  constructor(private router: Router) {
  }

  jump() {
    this.router.navigateByUrl('/app-react');
  }
}
