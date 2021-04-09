import { AfterViewInit, Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit, AfterViewInit {

  constructor() { }

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
    console.log((window as any).qiankunStarte);
    if (!(window as any).qiankunStarted) {
      (window as any).qiankunStarted = true;
      start();
    }
  }

}
