import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlansComponent} from "./plans/plans.component";
import {CorreoPredeterminadoComponent} from "./correo-predeterminado/correo-predeterminado.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'plans'
  },
  {
    path:'plans',
    component: PlansComponent
  },
  {
    path:'correo',
    component: CorreoPredeterminadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
