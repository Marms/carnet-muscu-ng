import { ExoTemplate } from './shared/exoTemplate';


export class ExerciceService {

  constructor() { }

  getExoTemplate (id: string) {
    const exoT = this.exerciceTemplate.find(
      (exoT) => {
        return exoT.id === id;
      }
    );
  }

  getExerciceTemplateList() {
    return this.exerciceTemplate;
  }

  addExoTemplate(exo : ExoTemplate) {
    this.exerciceTemplate.push(exo);
  } 

  exerciceTemplate : ExoTemplate[] = [{"id":"A1","name":"DEV COUCHE HALTERE","comment":null,"image":null 
  ,"type":["PECTORAUX"]}]

}
