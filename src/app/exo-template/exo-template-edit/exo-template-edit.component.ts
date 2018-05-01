import {Component, OnChanges, OnInit} from '@angular/core';
import { ExoTemplate } from '../../shared/exoTemplate';
import {Params, ActivatedRoute, Route, Router} from '@angular/router';
import { ExoTemplateService } from '../../exo-template.service';


@Component({
  selector: 'app-exo-template-edit',
  templateUrl: './exo-template-edit.component.html',
  styleUrls: ['./exo-template-edit.component.css']
})
export class ExoTemplateEditComponent implements OnInit {

    exoTemplate: ExoTemplate;
    typeExo: string[];
    action: string;
    path: string;

    constructor(private activatedRoute : ActivatedRoute, private exoTemplateSvc: ExoTemplateService, private router : Router) {
      this.setExoTemplate();
    }

    ngOnInit() {
      this.exoTemplate = new ExoTemplate();
      this.action = 'Edit';
      this.path = '..';
      this.typeExo = ['ABDO', 'PECTORAUX', 'JAMBES', 'DOS', 'MOLLETS', 'BRAS', 'EPAULES'];
      this.setExoTemplate();

    }

    setExoTemplate() {
      const id : string = this.activatedRoute.snapshot.params['exoId'];
      if(id === undefined) {
        this.action = 'Nouveau';
        this.path = '../list';
      }
      this.exoTemplate = this.exoTemplateSvc.getExoTemplate(id);
      this.activatedRoute.params.subscribe((params: Params) => {
        this.exoTemplate = this.exoTemplateSvc.getExoTemplate(params['exoId']);
      });
    }

    updateExoTemplate() {
      this.exoTemplateSvc.save(this.exoTemplate);
      this.router.navigate([this.path], {relativeTo: this.activatedRoute});
    }

}
