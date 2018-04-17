import { Exercice } from "./exercice";
import { SeanceTemplate } from "./seanceTemplate";
import { ExoTemplate } from "./exoTemplate";

export class Seance {

   date : number;
   id: number;
   name: string; 
   exercices: Exercice[];
   seancePredef: SeanceTemplate;
   salles: string[];
}