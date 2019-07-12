import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {


  constructor(
    private app: AppComponent
  ) { }

  ngOnInit(): void {
  }
  navigateTo(path) {
    this.app.navigateTo(path);
  }
}
