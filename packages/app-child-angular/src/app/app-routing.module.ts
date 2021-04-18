import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoseComponent } from './components/bose/bose.component';
import { EmptyComponent } from './components/empty/empty.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-angular',
    pathMatch: 'full',
  },
  {
    path: 'app-angular',
    children: [
      {
        path: '',
        redirectTo: 'bose',
        pathMatch: 'full',
      },
      {
        path: 'bose',
        component: BoseComponent,
      },
    ],
  },
  {
    path: '**',
    component: EmptyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  // @ts-ignore
  // providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/app-angular' : '/' }]
})
export class AppRoutingModule { }
