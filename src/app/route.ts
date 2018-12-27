import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';


export const ROUTES: Routes=[
    {path: "home", component: HomeComponent},
    {path: "listar", component: ListaComponent },
    {path: "detalle/:id", component: DetalleComponent },
    {path: "buscar", component: BuscarComponent },
    {path: "", pathMatch: "full", redirectTo: "home"},
    {path: "**", pathMatch: "full", redirectTo: "home"},
]