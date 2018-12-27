import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/services/service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'

})
export class BuscarComponent {
  lista: any[] = [];
  parametro: string;
  array: any[] = [];
  sea: boolean;
  footer: boolean = false;

  constructor(private service: Service, private verbuscar: ActivatedRoute) {
    this.sea = true;
    this.cargarStorage();

    this.service.getHttp().subscribe((resp: any) => {
      this.lista = resp;
    })
  }

  buscarSites(buscar: any) {
    this.sea = true;
    this.array = [];
    this.footer = true
    this.parametro = buscar.value.trim().toLowerCase();

    this.service.setVolver(this.parametro);
    this.buscar(buscar.value, this.lista);

  }
  //buscamos si la palabra introducida en la pagina buscar 
  buscar(termino, lista) {

    for (let i = 0; i < lista.length; i++) {
      let nombre = lista[i].name;
      let nombre1 = nombre.split(' ');
      let n1 = nombre1[0].trim().toLowerCase();
      let n2 = nombre1[1].trim().toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        this.array.push(lista[i])
      }
      if (n1.indexOf(termino) >= 0) {
        this.array.push(lista[i])
      }
      else if (n2.indexOf(termino) >= 0) {
        this.array.push(lista[i])
      }
    }
    if (this.array.length == 0) {
      this.sea = false;
    }

    this.guardarStorage();
  }
  //funcion para mover las cards
  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);

  }
  //funcion para guardar en local Storatge el array y el valor del imput de busqueda
  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.array));
    localStorage.setItem('datainput', this.parametro);

  }
  //funcion para cargar el la pagina si volvemos de detalle y el valor del imput de busqueda
  cargarStorage() {
    this.footer = true
    if (localStorage.getItem('data')) {
      this.array = JSON.parse(localStorage.getItem('data'));
      this.parametro = localStorage.getItem('datainput')
    }
  }

}
