import { Component, OnInit } from '@angular/core';
import { SeanceTemplate } from '../../shared/seanceTemplate';
import { SeanceTemplateService } from '../../seance-template.service';

@Component({
  selector: 'app-seance-template-list',
  templateUrl: './seance-template-list.component.html',
  styleUrls: ['./seance-template-list.component.css']
})
export class SeanceTemplateListComponent implements OnInit {

  constructor(private scTemplateSvc: SeanceTemplateService) { }
  scTemplates: SeanceTemplate[];

  ngOnInit() {
    this.scTemplates = this.scTemplateSvc.getSeanceTemplateList();
  }

}
