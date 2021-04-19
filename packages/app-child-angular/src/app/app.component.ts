import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication, AuthenticationToken } from './auth';

@Component({
  selector: '#rootangular app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-child-angular';

  constructor(
    @Inject(AuthenticationToken) private user$: Observable<Authentication>,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(console.log);
  }
}
