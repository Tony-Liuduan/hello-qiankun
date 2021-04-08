import { Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-container';

  ngOnInit() {

    registerMicroApps([
      {
        name: 'angularApp',
        entry: 'http://localhost:4200/',
        container: '#angular9',
        activeRule: '/app-angular',
      },
    ]);
    // 启动 qiankun
    start();
  }
}
