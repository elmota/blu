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
  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  filteredCountries = [];

  comunas: any;
  ciudades: any;
  regiones: any;
  sucursales: any;
  sucursal: any;
  placeholder = true;
  display = false;
  cars = [
    {
      "ciudad": "stgo",
      "direccion": "aca",
      "telefono": "8276226"
    },
    {
      "ciudad": "stgo",
      "direccion": "aca",
      "telefono": "8276226"
    },
    {
      "ciudad": "stgo",
      "direccion": "aca",
      "telefono": "8276226"
    },
    {
      "ciudad": "stgo",
      "direccion": "aca",
      "telefono": "8276226"
    },
    {
      "ciudad": "stgo",
      "direccion": "aca",
      "telefono": "8276226"
    }
  ];

  constructor(private suc: SucursalesService) { }

  ngOnInit() {
    this.loadCiudades();
    // this.loadComunas();
  }
  loadCiudad() {
    this.suc.getCiudades().subscribe((data: {}) => {
      console.log('Data', data);
    }
    )
  }

  loadCiudades() {
    this.suc.getRegiones_().subscribe((data: {}) => {
      console.log('Datax', data);
      this.countries = data;
    }
    )
  }

  loadSucursales() {
    this.suc.getSucursales().subscribe((data: {}) => {
      console.log('Data', data);
      this.sucursales = data;
      this.placeholder = false;
      // this.display = true;
    }
    )
  }

  loadComunas() {
    this.suc.getComunas().subscribe((data: {}) => {
      console.log('Data', data);
      this.comunas = data;
      // this.display = true;
    }
    )
  }

  loadMap(i) {
    this.display = true;
    console.log(i);
    this.sucursal = this.sucursales[0];
  }
  loadResults() {
    this.placeholder = false;
  }
  click() {
    this.display = true;
  }
  // filterCountrySingle(event) {
  //   let query = event.query;
  //   this.suc.getRegiones_().subscribe(countries => {
  //     this.filteredCountriesSingle = this.filterCountry(query, countries);
  //   }, (error => {
  //     console.log('error', error);
  //   }))
  // }
  
  filterBrands(event) {
    this.filteredCountries = [];
    // console.log('countries','query', event.query);
    for(let i = 0; i < this.countries.length; i++) {
        let brand = this.countries[i];
        // console.log('brand', this.countries[i]);
        if(brand.nombre.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          console.log('BRAND', brand);
          // this.brand = brand.nombre;
            this.filteredCountries.push(brand.nombre);
        }
    }
}
}
