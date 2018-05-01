import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeancesComponent } from './seances/seances.component';
import { HeaderComponent } from './header/header.component';
import { SeanceService } from './seance.service';
import { ExoTemplateComponent } from './exo-template/exo-template.component';
import { ExoTemplateService } from './exo-template.service';
import { SeanceTemplateComponent } from './seance-template/seance-template.component';
import { SeanceTemplateService } from './seance-template.service';
import { AppRoutingModule } from './app-routing.modules.service';
import { ExoTemplateDetailComponent } from './exo-template/exo-template-detail/exo-template-detail.component';
import { ExoTemplateListComponent } from './exo-template/exo-template-list/exo-template-list.component';
import { SeanceTemplateDetailComponent } from './seance-template/seance-template-detail/seance-template-detail.component';
import { SeanceTemplateListComponent } from './seance-template/seance-template-list/seance-template-list.component';
import { SeanceListComponent } from './seances/seance-list/seance-list.component';
import { SeanceDetailComponent } from './seances/seance-detail/seance-detail.component';
import { ExoTemplateEditComponent } from './exo-template/exo-template-edit/exo-template-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SeancesComponent,
    HeaderComponent,
    ExoTemplateComponent,
    SeanceTemplateComponent,
    ExoTemplateDetailComponent,
    ExoTemplateListComponent,
    SeanceTemplateDetailComponent,
    SeanceTemplateListComponent,
    SeanceListComponent,
    SeanceDetailComponent,
    ExoTemplateEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SeanceService, ExoTemplateService, SeanceTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
