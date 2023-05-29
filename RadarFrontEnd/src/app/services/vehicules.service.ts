import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from '../model/vehicule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {
  vehicules! : Vehicule[]

  constructor(private http:HttpClient) { }

  getAllVehicule() : Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>("http://localhost:8888/IMMATRICULATION-SERVICE/vehicules")
  }
}
