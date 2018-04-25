import { Component, OnInit } from '@angular/core';
import { SeanceTemplateService } from '../seance-template.service';
import { SeanceTemplate } from '../shared/seanceTemplate';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seance-template',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class SeanceTemplateComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.navigate(['list'], {relativeTo: this.activatedRoute})
    ;
  }

}
