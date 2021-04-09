import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { PortalComponent } from './components/portal/portal.component';


const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [{ path: '**', component: EmptyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
