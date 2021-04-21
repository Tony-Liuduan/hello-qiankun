import { AfterViewInit, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { loadMicroApp, registerMicroApps, start } from 'qiankun';

@Component({
  selector: '#container app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app-container';
  microApp: import("single-spa").Parcel;

  constructor(private readonly ngZone: NgZone) { }

  ngOnInit() {
    registerMicroApps([
      {
        name: 'angularApp',
        entry: '//localhost:3004',
        container: '#root',
        activeRule: '/#/app-angular',
      },
      {
        name: 'reactApp',
        entry: '//localhost:3002',
        container: '#root',
        activeRule: '/#/app-react',
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

    this.microApp = loadMicroApp({
      name: 'qiankun-app-component',
      entry: '//localhost:3003',
      container: '#componentRoot',
      props: { brand: 'qiankun' },
    });
  }
}
