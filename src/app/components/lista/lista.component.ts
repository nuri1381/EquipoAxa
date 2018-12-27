import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from 'src/app/services/service';
import { Router } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'

})
export class ListaComponent {
@ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;
  lista: any[] = [];
  loading: boolean;
  constructor(private service: Service, private router: Router) {
    this.loading = true;
    this.service.getHttp().subscribe((resp: any) => {
      this.lista = resp;
      this.loading = false
    });


  }
//ir a la pagina de detalle
  getDetalles(i: number) {
    
    this.router.navigate(["/detalle", i]);

  }
  //Ir al final de la lista 
  irFinal(){
    this.viewport.scrollToIndex(this.lista.length);
  }
  //ir al inicio
  irInicio(){
    this.viewport.scrollToIndex(0);
  }
  irMedio(){
    this.viewport.scrollToIndex(this.lista.length/2);
  }
}

