import {Component, OnInit} from '@angular/core';
import {ProprietairesService} from "../services/proprietaires.service";
import {Proprietaire} from "../model/proprietaire.model";


@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit{
  proprietaires! : Proprietaire[]
    constructor(private proprietairesService : ProprietairesService) {
    }

  ngOnInit(): void {
    this.getAllProprietaire();
  }

    getAllProprietaire(){
      this.proprietairesService.getAllProprietaires().subscribe({
        next: data => {
          this.proprietaires = data
          console.log(this.proprietaires)
        },
        error : err => {
          console.log(err)
          console.log("Erreur")
        }
      })
    }

}
