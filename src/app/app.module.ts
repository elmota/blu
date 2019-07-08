import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Component, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule }   from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    AppComponent,
    SucursalesComponent,
    ServiciosComponent,
    MapsComponent
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
