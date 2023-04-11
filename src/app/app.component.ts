import { Component } from '@angular/core';
import { Elemento } from './Elemento';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-ej-modal';


lista: Elemento[] = [
  {"id": 1, "descripcion": "algo"},

  {"id": 2, "descripcion": "un item"},

  {"id": 3, "descripcion": "otra cosa"}
]

elemento: Elemento = {"id": -1, "descripcion": ""}

constructor() {

}

setactual(elem:Elemento) {
  this.elemento = elem;
}

}