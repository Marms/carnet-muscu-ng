import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../../seance.service';
import { ActivatedRoute } from '@angular/router';
import { Seance } from '../../shared/seance';
import { Params } from '@angular/router';

@Component({
  selector: 'app-seance-detail',
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css']
})
export class SeanceDetailComponent implements OnInit {
  
  seance: Seance;

  constructor(private seanceSvc: SeanceService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.seance = this.seanceSvc.getSeance(+params['id']);
      }
    );
  }

}
