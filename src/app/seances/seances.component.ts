import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../seance.service';
import { Seance } from '../shared/seance';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.route.navigate(['list'], {relativeTo: this.activatedRoute});
  }

}
