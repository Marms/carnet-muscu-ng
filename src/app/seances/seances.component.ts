import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../seance.service';
import { Seance } from '../shared/seance';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  seances: Seance[];

  constructor(private seanceSvc: SeanceService) { }

  ngOnInit() {
    this.seances = this.seanceSvc.getSeances();
    console.log(this.seances.length +" taille seance");
  }

}
