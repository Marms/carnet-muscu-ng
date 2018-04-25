import { Component, OnInit } from '@angular/core';
import { ExoTemplateService } from '../exo-template.service';
import { ExoTemplate } from '../shared/exoTemplate';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exo-template',
  templateUrl: './exo-template.component.html',
  styleUrls: ['./exo-template.component.css']
})
export class ExoTemplateComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.navigate();
    }

    navigate(){
     this.router.navigate(['list'], {relativeTo: this.activatedRoute}); 
    }

  }
