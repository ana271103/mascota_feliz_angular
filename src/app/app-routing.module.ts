import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {NavComponent} from "./admin/nav/nav.component";

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'admin',
    component: NavComponent,
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
