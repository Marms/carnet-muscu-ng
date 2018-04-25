import { Component, OnInit } from '@angular/core';
import { ExoTemplateService } from '../../exo-template.service';
import { ExoTemplate } from '../../shared/exoTemplate';

@Component({
  selector: 'app-exo-template-list',
  templateUrl: './exo-template-list.component.html',
  styleUrls: ['./exo-template-list.component.css']
})
export class ExoTemplateListComponent implements OnInit {

  exoTemplates: ExoTemplate[];
  constructor(private exoTempSvc: ExoTemplateService) { }

  ngOnInit() {
    this.exoTemplates = this.exoTempSvc.getExoTemplatesList();
  }

}
