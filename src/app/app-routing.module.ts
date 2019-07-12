import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { EnviosComponent } from './components/_servicios/envios/envios.component';
import { OficinasComponent } from './components/_servicios/oficinas/oficinas.component';
import { CourierComponent } from './components/_servicios/courier/courier.component';
import { AlmacenajeComponent } from './components/_servicios/almacenaje/almacenaje.component';
import { PoliticaComponent } from './components/_nosotros/politica/politica.component';
import { IntegracionComponent } from './components/_nosotros/integracion/integracion.component';
import { ValoresComponent } from './components/_nosotros/valores/valores.component';
import { TecnologiaComponent } from './components/_nosotros/tecnologia/tecnologia.component';
import { EjecutivosComponent } from './components/_contacto/ejecutivos/ejecutivos.component';
import { MaterialesComponent } from './components/_contacto/materiales/materiales.component';
import { CoberturaComponent } from './components/_contacto/cobertura/cobertura.component';
import { ServicioComponent } from './components/_contacto/servicio/servicio.component';
import { TrabajeComponent } from './components/_contacto/trabaje/trabaje.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sucursales',
    component: SucursalesComponent
  },
  {
    path: 'servicios/envios',
    component: EnviosComponent
  },
  {
    path: 'servicios/oficinas',
    component: OficinasComponent
  },
  {
    path: 'servicios/courier',
    component: CourierComponent
  },
  {
    path: 'servicios/almacenaje',
    component: AlmacenajeComponent
  },
  {
    path: 'nosotros/politica',
    component: PoliticaComponent
  },
  {
    path: 'nosotros/integracion',
    component: IntegracionComponent
  },
  {
    path: 'nosotros/valores',
    component: ValoresComponent
  },
  {
    path: 'nosotros/tecnologia',
    component: TecnologiaComponent
  },
  {
    path: 'contacto/ejecutivos',
    component: EjecutivosComponent
  },  {
    path: 'contacto/servicio',
    component: ServicioComponent
  },
  {
    path: 'contacto/cobertura',
    component: CoberturaComponent
  },
  {
    path: 'contacto/materiales',
    component: MaterialesComponent
  },
  {
    path: 'contacto/trabaje',
    component: TrabajeComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
