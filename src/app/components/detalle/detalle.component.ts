import { Component } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { Service } from 'src/app/services/service';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'

})
export class DetalleComponent  {
  lista: any[] = [];
  lista2: any[] = [];
  parametro: any;
  seleccionado:any={};
  constructor(private service: Service, private verdetalle: ActivatedRoute ) {
    this.verdetalle.params.subscribe(params => {
      console.log(params);
      this.parametro = (params['id']);
      console.log('parammetro'+this.parametro+1);

    });
    console.log("constructor detalle")
    this.service.getHttp()
      .subscribe((resp: any) => {
        this.lista = resp;
        this.seleccionado=this.lista[this.parametro];
        console.log(this.seleccionado);
     
      })
  
  }
 
} 