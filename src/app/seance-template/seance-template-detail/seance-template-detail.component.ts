import { Component, OnInit } from '@angular/core';
import { SeanceTemplateService } from '../../seance-template.service';
import { SeanceTemplate } from '../../shared/seanceTemplate';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-seance-template-detail',
  templateUrl: './seance-template-detail.component.html',
  styleUrls: ['./seance-template-detail.component.css']
})
export class SeanceTemplateDetailComponent implements OnInit {

  seanceT : SeanceTemplate;

  constructor(private activatedRoute: ActivatedRoute,private scTemplateSvc: SeanceTemplateService) { }

  ngOnInit() {
    this.seanceT = this.scTemplateSvc.getSeanceTemplate(
      +this.activatedRoute.snapshot.params['id']
    );
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.seanceT = this.scTemplateSvc.getSeanceTemplate(+param['id']);
      }
    );
    
  }

}
