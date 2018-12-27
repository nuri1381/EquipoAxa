import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class Service {
  private volver: string="";
  constructor(private http: HttpClient) { }
  getHttp() {
    return this.http.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .pipe(map((data: any) => {
        return data['Brastlewark'];

      }))
  }

  setVolver(termino) {
    this.volver = termino;
  }
  getVolver() {
    return this.volver ;
  }

}

