import { Component, OnInit } from '@angular/core';
import { ExoTemplate } from '../../shared/exoTemplate';
import { ExoTemplateService } from '../../exo-template.service';
import {Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exo-template-detail',
  templateUrl: './exo-template-detail.component.html',
  styleUrls: ['./exo-template-detail.component.css']
})
export class ExoTemplateDetailComponent implements OnInit {

  exoTemplate: ExoTemplate;

  constructor(private activatedRoute : ActivatedRoute, private exoTemplateSvc: ExoTemplateService) { }

  ngOnInit() {
    const id : string = this.activatedRoute.snapshot.params['exoId'];
    this.exoTemplate = this.exoTemplateSvc.getExoTemplate(id);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.exoTemplate = this.exoTemplateSvc.getExoTemplate(params['exoId']);
    });
  }

}
