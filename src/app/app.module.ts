import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ScrollingModule} from "@angular/cdk/scrolling"
import { DragDropModule } from "@angular/cdk/drag-drop"
//componentes
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PipePipe } from './pipes/pipe.pipe';
import { ListaComponent } from './components/lista/lista.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';

//rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './route';
//servicios
import { Service } from './services/service';
import { LoudingComponent } from './components/shared/louding/louding.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    DetalleComponent,
    NavbarComponent,
    PipePipe,
    ListaComponent,
    HomeComponent,
    FooterComponent,
    Footer2Component,
    LoudingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot( ROUTES,{useHash:true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
