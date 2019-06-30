import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sucursales, Ciudades } from './../../shared/sucursales';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class SucursalesService {

    apiURL = 'http://localhost:8080/sucursalBL';
    country = {
  "pais":"CL"
}


    constructor(private http: HttpClient) { }

// httpOptions = {
//             headers: new HttpHeaders({
//                 'Content-Type': 'application/json',
//             })
//         };




  getRegiones(data): Observable<string> {
    return new Observable<string>(
      observer => {
        this.http.post(this.apiURL + '/regiones', this.country).subscribe(
          (response: any) => {
            observer.next(response);
          },
          (error: any) => {
            console.log("eerro")
          }
        );
      }
    );
  }

    getComunas(data): Observable<string> {
    return new Observable<string>(
      observer => {
        this.http.post(this.apiURL + '/comunas', data).subscribe(
          (response: any) => {
            observer.next(response);
          },
          (error: any) => {
            console.log("eerro")
          }
        );
      }
    );
  }

      getSucursales(data): Observable<string> {

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

        
    return new Observable<string>(
      observer => {
        this.http.post(this.apiURL + '/sucursal', data, httpOptions).subscribe(
          (response: any) => {
            observer.next(response);
          },
          (error: any) => {
            console.log("eerro")
          }
        );
      }
    );
  }


}
