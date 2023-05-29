import { Component, OnInit } from '@angular/core';
import { VehiculesService } from '../services/vehicules.service';
import { Vehicule } from '../model/vehicule.model';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit{
  vehicules! : Vehicule[]

  constructor(private vehiculeService: VehiculesService){

  }

  ngOnInit(): void {
    this.getAllVehicules()
  }

  getAllVehicules(){
    this.vehiculeService.getAllVehicule().subscribe({
      next : data => {
        this.vehicules = data
        console.log(data);
        
      },

      error : error => {
        console.log(error);
      }
    })

  }

  deleteVehicule(id : number){
    let conf = confirm("Are you sure ?")
    
    if(conf === false) return;
    this.vehiculeService.deleteVehicule(id).subscribe({
      next : () => {
        this.getAllVehicules()
      },
      error : error => {
        console.error(error);
      }
    })
  }

}
