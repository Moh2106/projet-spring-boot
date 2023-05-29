import {Proprietaire} from "./proprietaire.model";

export interface Vehicule{
    numero_immatrication : String;
    marque : String;
    puissance_fiscale : Number;
    model : String;
    proprietaire : Proprietaire;
}
