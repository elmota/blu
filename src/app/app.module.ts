import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Component, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { InfoComponent } from './components/info/info.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule }   from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { EnviosComponent } from './components/_servicios/envios/envios.component';
import { OficinasComponent } from './components/_servicios/oficinas/oficinas.component';
import { CourierComponent } from './components/_servicios/courier/courier.component';
import { AlmacenajeComponent } from './components/_servicios/almacenaje/almacenaje.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriaComponent } from './components/_nosotros/historia/historia.component';
import { MisionComponent } from './components/_nosotros/mision/mision.component';
import { ValoresComponent } from './components/_nosotros/valores/valores.component';
import { TecnologiaComponent } from './components/_nosotros/tecnologia/tecnologia.component';
import { IntegracionComponent } from './components/_nosotros/integracion/integracion.component';
import { PoliticaComponent } from './components/_nosotros/politica/politica.component';
import { EjecutivosComponent } from './components/_contacto/ejecutivos/ejecutivos.component';
import { ServicioComponent } from './components/_contacto/servicio/servicio.component';
import { CoberturaComponent } from './components/_contacto/cobertura/cobertura.component';
import { MaterialesComponent } from './components/_contacto/materiales/materiales.component';
import { TrabajeComponent } from './components/_contacto/trabaje/trabaje.component';
import { MenuComponent } from './components/_contacto/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalesComponent,
    ServiciosComponent,    
    InfoComponent,
    NosotrosComponent,
    ContactoComponent,
    MapsComponent,
    SeguimientoComponent,
    EnviosComponent,
    OficinasComponent,
    CourierComponent,
    AlmacenajeComponent,
    HomeComponent,
    HistoriaComponent,
    MisionComponent,
    ValoresComponent,
    TecnologiaComponent,
    IntegracionComponent,
    PoliticaComponent,
    EjecutivosComponent,
    ServicioComponent,
    CoberturaComponent,
    MaterialesComponent,
    TrabajeComponent,
    MenuComponent
  ],
  imports: [
    ScrollToModule.forRoot(),
    DialogModule,
    BrowserModule,
    TableModule,
    FormsModule,
    DropdownModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
