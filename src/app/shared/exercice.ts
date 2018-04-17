import { ExoTemplate } from "./exoTemplate";
import { Serie } from "./serie";

export class Exercice {
    date : number;
    id: number;
    numero: number;
    repos: number;
    exoPredef: ExoTemplate;
    series: Serie[];
}