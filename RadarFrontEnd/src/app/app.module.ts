import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import {CommonModule} from "@angular/common";
import { VehiculeComponent } from './vehicule/vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietaireComponent,
    VehiculeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
