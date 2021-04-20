import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeafComponent } from './components/leaf/leaf.component';
import { EmptyComponent } from './components/empty/empty.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-angular/app-leaf-angular/leaf',
    pathMatch: 'full',
  },
  {
    path: 'app-angular',
    children: [
      {
        path: 'app-leaf-angular',
        children: [
          {
            path: 'leaf',
            component: LeafComponent,
          },
          {
            path: 'test',
            component: TestComponent,
          },
        ],
      },
    ]
  },
  {
    path: '**',
    component: EmptyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  // providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/app-angular' : '/' }]
})
export class AppRoutingModule { }
