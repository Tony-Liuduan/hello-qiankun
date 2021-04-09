import { AfterViewInit, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: '#root app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app-container';

  constructor(private readonly ngZone: NgZone) { }

  ngOnInit() {
    registerMicroApps([
      {
        name: 'angularApp',
        entry: '//localhost:4200',
        container: '#root',
        activeRule: '/app-angular',
      },
      {
        name: 'reactApp',
        entry: '//localhost:5000',
        container: '#root',
        activeRule: '/app-react',
      },
    ]);

  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      console.log((window as any).qiankunStarte);
      if (!(window as any).qiankunStarted) {
        (window as any).qiankunStarted = true;
        start();
      }
    });
  }
}
