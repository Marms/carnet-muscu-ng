import { Routes, RouterModule } from '@angular/router';
import { SeancesComponent } from './seances/seances.component';
import { ExoTemplateComponent } from './exo-template/exo-template.component';
import { SeanceTemplateComponent } from './seance-template/seance-template.component';
import { NgModule } from '@angular/core';


const routes : Routes = [
  {path: "seances", component: SeancesComponent }
  ,{path: "exo-templates", component: ExoTemplateComponent}
  ,{path: "sc-templates", component: SeanceTemplateComponent}
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
