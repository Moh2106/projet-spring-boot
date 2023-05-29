import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Proprietaire} from "../model/proprietaire.model";

@Injectable({
  providedIn: 'root'
})
export class ProprietairesService {
  proprietaire! : Proprietaire[]
  constructor(private http: HttpClient) { }


  getAllProprietaires() : Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>("http://localhost:8888/IMMATRICULATION-SERVICE/proprietaires")
  }
}
