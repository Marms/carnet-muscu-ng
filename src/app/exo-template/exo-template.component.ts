import { Component, OnInit } from '@angular/core';
import { ExoTemplateService } from '../exo-template.service';
import { ExoTemplate } from '../shared/exoTemplate';

@Component({
  selector: 'app-exo-template',
  templateUrl: './exo-template.component.html',
  styleUrls: ['./exo-template.component.css']
})
export class ExoTemplateComponent implements OnInit {

  exoTemplates: ExoTemplate[];
  constructor(private exoTempSvc: ExoTemplateService) { }

  ngOnInit() {
    this.exoTemplates = this.exoTempSvc.getExoTemplatesList();
  }

}
