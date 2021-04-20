import { AfterViewInit, Component, Inject, NgZone, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
import { Observable } from 'rxjs';
import { Authentication, AuthenticationToken } from './auth';

@Component({
  selector: '#rootangular app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app-child-angular';

  constructor(
    @Inject(AuthenticationToken) private user$: Observable<Authentication>,
    private readonly ngZone: NgZone
  ) { }

  ngOnInit() {
    this.user$.subscribe(user => console.log('[userInfo] ', user));

    registerMicroApps([
      {
        name: 'angularLeafApp',
        entry: '//localhost:3005',
        container: '#leafroot',
        activeRule: '#/app-angular/app-leaf-angular',
      },
    ]);
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        start();
      }
    });
  }
}
