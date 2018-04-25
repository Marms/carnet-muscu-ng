import { Component, OnInit } from '@angular/core';
import { Seance } from '../../shared/seance';
import { SeanceService } from '../../seance.service';

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {  
  
  seances: Seance[];
  
    constructor(private seanceSvc: SeanceService) { }
  
    ngOnInit() {
      this.seances = this.seanceSvc.getSeances();
      console.log(this.seances.length +" taille seance");
    }
  

}
