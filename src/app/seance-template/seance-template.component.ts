import { Component, OnInit } from '@angular/core';
import { SeanceTemplateService } from '../seance-template.service';
import { SeanceTemplate } from '../shared/seanceTemplate';

@Component({
  selector: 'app-seance-template',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class SeanceTemplateComponent implements OnInit {

  constructor(private scTemplateSvc: SeanceTemplateService) { }
  scTemplates: SeanceTemplate[];

  ngOnInit() {
    this.scTemplates = this.scTemplateSvc.getSeanceTemplateList();
  }

}
