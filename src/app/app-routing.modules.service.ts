import { Routes, RouterModule } from '@angular/router';
import { SeancesComponent } from './seances/seances.component';
import { ExoTemplateComponent } from './exo-template/exo-template.component';
import { SeanceTemplateComponent } from './seance-template/seance-template.component';
import { NgModule } from '@angular/core';
import { ExoTemplateDetailComponent } from './exo-template/exo-template-detail/exo-template-detail.component';
import { ExoTemplateListComponent } from './exo-template/exo-template-list/exo-template-list.component';
import { SeanceTemplateDetailComponent } from './seance-template/seance-template-detail/seance-template-detail.component';
import { SeanceTemplateListComponent } from './seance-template/seance-template-list/seance-template-list.component';
import { SeanceListComponent } from './seances/seance-list/seance-list.component';
import { SeanceDetailComponent } from './seances/seance-detail/seance-detail.component';


const routes : Routes = [
  {path: "seances", component: SeancesComponent, children: [
    {path: "list", component: SeanceListComponent},
    {path: ":id", component: SeanceDetailComponent}
  ]}
  ,{path: "exo-templates", component: ExoTemplateComponent, children: [
    {path: "list", component: ExoTemplateListComponent} ,
    {path: ":exoId", component: ExoTemplateDetailComponent}
    
    
  ]}
  ,{path: "sc-templates", component: SeanceTemplateComponent, children: [
    {path: "list", component: SeanceTemplateListComponent}, // etrangement obligation de mettre le path list avant sinon erreur
    {path: ":id", component: SeanceTemplateDetailComponent}
    
  ]}
  ,{path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
