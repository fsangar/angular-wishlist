import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.sass']
})
export class ListaDestinosComponent implements OnInit {
  destinos: string[];

  constructor() {
    this.destinos = ['Cáceres','Badajoz','Mérida','Plasencia','Coria'];
  }

  ngOnInit(): void {
  }

}
