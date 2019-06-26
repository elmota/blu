import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalesComponent } from './components/sucursales/sucursales.component';

const routes: Routes = [
  {
    path: 'sucursales',
    component: SucursalesComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
