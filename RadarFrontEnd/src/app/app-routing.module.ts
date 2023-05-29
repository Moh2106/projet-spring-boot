import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProprietaireComponent} from "./proprietaire/proprietaire.component";
import { VehiculeComponent } from './vehicule/vehicule.component';

const routes: Routes = [
  {
    path: "proprietaires",
    component : ProprietaireComponent
  },

  {
    path: "vehicules",
    component : VehiculeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
