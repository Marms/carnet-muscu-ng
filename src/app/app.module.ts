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


@NgModule({
  declarations: [
    AppComponent,
    SeancesComponent,
    HeaderComponent,
    ExoTemplateComponent,
    SeanceTemplateComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SeanceService, ExoTemplateService, SeanceTemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
