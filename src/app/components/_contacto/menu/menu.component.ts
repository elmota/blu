import { Component, OnInit } from '@angular/core';
import { ContactoComponent } from './../../contacto/contacto.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private con: ContactoComponent
  ) { }

  ngOnInit() {
  }
  contactTo(to) {
    this.con.contacto = to;
  }
}
