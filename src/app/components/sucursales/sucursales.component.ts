import { Component, OnInit } from '@angular/core';
import { SucursalesService } from './../../services/sucursales/sucursales.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalesService]
})
export class SucursalesComponent implements OnInit {
  country: any;
  brand: string;

  countries: any;
  comunas: any;
  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  filteredCountries = [];
  filteredComunas = [];

  ciudades: any;
  regiones: any;
  sucursales: any;
  sucursal: any;
  placeholder = true;
  display = false;
  scuursalesSize = 0;

  constructor(private suc: SucursalesService) { }

  ngOnInit() {
    this.loadRegiones();
  }

  loadRegiones() {
    this.suc.getRegiones("").subscribe(
      (response: any) => {
        this.regiones = response;
      },
      (error: any) => {
      })
  }
  loadComunas(data) {
    this.suc.getComunas(data).subscribe(
      (response: any) => {
        this.comunas = response;
      },
      (error: any) => {
      })
  }

  loadSucursales(event) {
    let data = {
      "pais": "CL",
      "comuna": "Antofagasta"
    }
    this.suc.getSucursales(data).subscribe(
      (response: any) => {
        this.placeholder = false;
        this.sucursales = response.agencies;
        this.scuursalesSize = this.sucursales.length;
      },
      (error: any) => {
      })
  }

  loadMap(i) {
    console.log(i, this.sucursales[i]);
    this.display = true;
    this.sucursal = null;
    this.sucursal = this.sucursales[i];
  }
  loadResults() {
    this.placeholder = false;
  }
  click() {
    this.display = true;
  }

  filterBrands(event) {
    this.filteredCountries = [];
    for (let i = 0; i < this.regiones.length; i++) {
      let brand = this.regiones[i];
      if (brand.nombreRegion.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {

        this.filteredCountries.push(brand.nombreRegion);
      }
    }
  }

  filterComunas(event) {
    this.filteredComunas = [];
    for (let i = 0; i < this.comunas.length; i++) {
      let comuna = this.comunas[i];
      if (comuna.nombreComuna.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredComunas.push(comuna.nombreComuna);
      }
    }
  }

  refreshComunas(event) {
    this.filteredComunas = [];
    for (let i = 0; i < this.regiones.length; i++) {
      let comuna = event;
      if (comuna.toLowerCase().indexOf(event.toLowerCase()) == 0) {
        // console.log('REFRESH COMUNAS', comuna);
        let data = {
          "comuna": comuna
        }
        this.loadComunas(data);
      }
    }
  }
}
