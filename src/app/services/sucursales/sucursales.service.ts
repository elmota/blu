import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sucursales, Ciudades } from './../../shared/sucursales';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class SucursalesService {

    apiURL = 'http://localhost:3000';
    body = '';
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // HttpClient API get() method => Fetch employees list
    getCiudades(): Observable<Ciudades> {
        return this.http.get<Ciudades>(this.apiURL + '/ciudades')
    }
    // HttpClient API get() method => Fetch employees list
    getSucursales(): Observable<Sucursales> {
        return this.http.get<Sucursales>(this.apiURL + '/agencies')
    }
    getRegiones_() {
        return this.http.get<Ciudades>(this.apiURL + '/regiones')
    }
    getRegiones() {
        return this.http.post(this.apiURL + '/ciudades', '')
            .subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                },
                error => {

                    console.log("Error", error);

                }

            );
    }


    getComunas(): Observable<Ciudades> {
        return this.http.get<Ciudades>(this.apiURL + '/comunas');
    }

}
