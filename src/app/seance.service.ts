import { Injectable } from '@angular/core';
import { Seance } from './shared/seance';

@Injectable()
export class SeanceService {

  constructor() { }

  getSeances() {
    return this.seaces;
  }

  getSeance(id: number) {
    const seance =  this.seaces.find(
      (s) => {
        return s.id === id; 
      }
    );
    return seance;
  }

  addSeance(sc: Seance) {
    this.seaces.push(sc);
  }

  seaces: Seance[] = [
		{
			"id": 270,
			"name": null,
			"date": 1521886483000,
			"seancePredef": {
				"id": 7,
				"name": "JAMBES",
				"list": [
					{
						"id": "A36",
						"name": "SQUAT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1367,
					"exoPredef": {
						"id": "A36",
						"name": "SQUAT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [],
					"date": 1521886483000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1368,
					"exoPredef": {
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7644,
							"numero": 0,
							"poids": 120,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7645,
							"numero": 1,
							"poids": 220,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7646,
							"numero": 2,
							"poids": 320,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7647,
							"numero": 3,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7648,
							"numero": 4,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7649,
							"numero": 5,
							"poids": 440,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7650,
							"numero": 6,
							"poids": 440,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7651,
							"numero": 7,
							"poids": 280,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1369,
					"exoPredef": {
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7653,
							"numero": 0,
							"poids": 54,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7655,
							"numero": 1,
							"poids": 61,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7659,
							"numero": 2,
							"poids": 75,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7663,
							"numero": 3,
							"poids": 82,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1370,
					"exoPredef": {
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7652,
							"numero": 0,
							"poids": 54,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7656,
							"numero": 1,
							"poids": 61,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7658,
							"numero": 2,
							"poids": 75,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7662,
							"numero": 3,
							"poids": 82,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1371,
					"exoPredef": {
						"id": "A54",
						"name": "MOLLETS ASSIS",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES",
							"MOLLET"
						]
					},
					"series": [
						{
							"id": 7654,
							"numero": 0,
							"poids": 30,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7657,
							"numero": 1,
							"poids": 60,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7660,
							"numero": 2,
							"poids": 90,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7661,
							"numero": 3,
							"poids": 90,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1372,
					"exoPredef": {
						"id": "A122",
						"name": "Adduction des hanches",
						"comment": null,
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7664,
							"numero": 0,
							"poids": 75,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7666,
							"numero": 1,
							"poids": 82,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7667,
							"numero": 2,
							"poids": 89,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7670,
							"numero": 3,
							"poids": 89,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 5,
					"repos": 0
				},
				{
					"id": 1373,
					"exoPredef": {
						"id": "A121",
						"name": "Abduction des hanches",
						"comment": null,
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7665,
							"numero": 0,
							"poids": 75,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7668,
							"numero": 1,
							"poids": 82,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7669,
							"numero": 2,
							"poids": 89,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7671,
							"numero": 3,
							"poids": 89,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521886483000,
					"numero": 6,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 269,
			"name": null,
			"date": 1521739657000,
			"seancePredef": {
				"id": 38,
				"name": "Épaule JO",
				"list": [
					{
						"id": "A144",
						"name": "Développé nuque guidé",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A145",
						"name": "Antepulsion",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A146",
						"name": "Épaule rowing supination",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A71",
						"name": "ELEVATION LATERALE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A72",
						"name": "ELEVATION LATERALE HALTERE, penche en avant",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1361,
					"exoPredef": {
						"id": "A144",
						"name": "Développé nuque guidé",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7618,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7619,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7620,
							"numero": 2,
							"poids": 40,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7621,
							"numero": 3,
							"poids": 40,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7622,
							"numero": 4,
							"poids": 50,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7623,
							"numero": 5,
							"poids": 50,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521739657000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1362,
					"exoPredef": {
						"id": "A72",
						"name": "ELEVATION LATERALE HALTERE, penche en avant",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7624,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7626,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7628,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7630,
							"numero": 3,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7632,
							"numero": 4,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521739657000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1363,
					"exoPredef": {
						"id": "A146",
						"name": "Épaule rowing supination",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7625,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7627,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7629,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7631,
							"numero": 3,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7633,
							"numero": 4,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521739657000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1364,
					"exoPredef": {
						"id": "A71",
						"name": "ELEVATION LATERALE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7634,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7635,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7636,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7637,
							"numero": 3,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7638,
							"numero": 4,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7639,
							"numero": 5,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521739657000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1365,
					"exoPredef": {
						"id": "A4",
						"name": "auie",
						"comment": null,
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [],
					"date": 1521739657000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1366,
					"exoPredef": {
						"id": "A128",
						"name": "Abcoaster",
						"comment": null,
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [
						{
							"id": 7640,
							"numero": 0,
							"poids": 0,
							"nbRepeat": 15,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7641,
							"numero": 1,
							"poids": 0,
							"nbRepeat": 15,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7642,
							"numero": 2,
							"poids": 0,
							"nbRepeat": 15,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7643,
							"numero": 3,
							"poids": 0,
							"nbRepeat": 15,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": 5,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521739657000,
					"numero": 5,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 268,
			"name": null,
			"date": 1521654274000,
			"seancePredef": {
				"id": 36,
				"name": "Biceps JO",
				"list": [
					{
						"id": "A11",
						"name": "BICEPS CURL EZ",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A142",
						"name": "Curl poulie assis",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1355,
					"exoPredef": {
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7598,
							"numero": 0,
							"poids": 25,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7600,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7602,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7604,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7606,
							"numero": 4,
							"poids": 40,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521654274000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1356,
					"exoPredef": {
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7599,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7601,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7603,
							"numero": 2,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7605,
							"numero": 3,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7607,
							"numero": 4,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521654274000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1357,
					"exoPredef": {
						"id": "A142",
						"name": "Curl poulie assis",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7612,
							"numero": 0,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7613,
							"numero": 1,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7614,
							"numero": 2,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521654274000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1358,
					"exoPredef": {
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7608,
							"numero": 0,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7609,
							"numero": 1,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7610,
							"numero": 2,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7611,
							"numero": 3,
							"poids": 14,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521654274000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1359,
					"exoPredef": {
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7615,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7616,
							"numero": 1,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7617,
							"numero": 2,
							"poids": 22,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521654274000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1360,
					"exoPredef": {
						"id": "A44",
						"name": "GAINAGE",
						"comment": "",
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [],
					"date": 1521654274000,
					"numero": 5,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 267,
			"name": null,
			"date": 1521568246000,
			"seancePredef": {
				"id": 41,
				"name": "Pecs light",
				"list": [
					{
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A138",
						"name": "Dev incl haltères",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1352,
					"exoPredef": {
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7580,
							"numero": 0,
							"poids": 16,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7581,
							"numero": 1,
							"poids": 26,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7582,
							"numero": 2,
							"poids": 38,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7583,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7584,
							"numero": 4,
							"poids": 46,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7585,
							"numero": 5,
							"poids": 46,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521568246000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1353,
					"exoPredef": {
						"id": "A138",
						"name": "Dev incl haltères",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7586,
							"numero": 0,
							"poids": 16,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7587,
							"numero": 1,
							"poids": 24,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7588,
							"numero": 2,
							"poids": 32,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7589,
							"numero": 3,
							"poids": 32,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7590,
							"numero": 4,
							"poids": 32,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7591,
							"numero": 5,
							"poids": 32,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7592,
							"numero": 6,
							"poids": 16,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521568246000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1354,
					"exoPredef": {
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7593,
							"numero": 0,
							"poids": 16,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7594,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7595,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7596,
							"numero": 3,
							"poids": 30,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7597,
							"numero": 4,
							"poids": 35,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521568246000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 266,
			"name": null,
			"date": 1521362337000,
			"seancePredef": {
				"id": 35,
				"name": "Triceps JO",
				"list": [
					{
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					{
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1346,
					"exoPredef": {
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7560,
							"numero": 0,
							"poids": 17.5,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7561,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7562,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7563,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7564,
							"numero": 4,
							"poids": 38.5,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7565,
							"numero": 5,
							"poids": 21,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521362337000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1347,
					"exoPredef": {
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					"series": [
						{
							"id": 7566,
							"numero": 0,
							"poids": 21,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7567,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7568,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7569,
							"numero": 3,
							"poids": 38.5,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7570,
							"numero": 4,
							"poids": 21,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521362337000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1348,
					"exoPredef": {
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7571,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7572,
							"numero": 1,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7573,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521362337000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1349,
					"exoPredef": {
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7574,
							"numero": 0,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7575,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7576,
							"numero": 2,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521362337000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1350,
					"exoPredef": {
						"id": "A84",
						"name": "Crunch banc",
						"comment": null,
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [
						{
							"id": 7577,
							"numero": 0,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7578,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7579,
							"numero": 2,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521362337000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1351,
					"exoPredef": {
						"id": "A44",
						"name": "GAINAGE",
						"comment": "",
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [],
					"date": 1521362337000,
					"numero": 5,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 265,
			"name": null,
			"date": 1521282810000,
			"seancePredef": {
				"id": 7,
				"name": "JAMBES",
				"list": [
					{
						"id": "A36",
						"name": "SQUAT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1339,
					"exoPredef": {
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7538,
							"numero": 0,
							"poids": 120,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7539,
							"numero": 1,
							"poids": 220,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7540,
							"numero": 2,
							"poids": 320,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7541,
							"numero": 3,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7542,
							"numero": 4,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7543,
							"numero": 5,
							"poids": 430,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7544,
							"numero": 6,
							"poids": 430,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521282810000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1340,
					"exoPredef": {
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7546,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7547,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521282810000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1341,
					"exoPredef": {
						"id": "A36",
						"name": "SQUAT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [],
					"date": 1521282810000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1342,
					"exoPredef": {
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7548,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7549,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7550,
							"numero": 2,
							"poids": 70,
							"nbRepeat": 11,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7551,
							"numero": 3,
							"poids": 84,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521282810000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1343,
					"exoPredef": {
						"id": "A120",
						"name": "Mollets debout machine",
						"comment": null,
						"image": null,
						"type": [
							"MOLLET"
						]
					},
					"series": [
						{
							"id": 7552,
							"numero": 0,
							"poids": 105,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7553,
							"numero": 1,
							"poids": 105,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7555,
							"numero": 2,
							"poids": 125,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7557,
							"numero": 3,
							"poids": 125,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521282810000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1344,
					"exoPredef": {
						"id": "A122",
						"name": "Adduction des hanches",
						"comment": null,
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7554,
							"numero": 0,
							"poids": 75,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7556,
							"numero": 1,
							"poids": 82,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7558,
							"numero": 2,
							"poids": 89,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7559,
							"numero": 3,
							"poids": 89,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521282810000,
					"numero": 5,
					"repos": 0
				},
				{
					"id": 1345,
					"exoPredef": {
						"id": "A128",
						"name": "Abcoaster",
						"comment": null,
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [],
					"date": 1521282810000,
					"numero": 6,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 264,
			"name": null,
			"date": 1521220366000,
			"seancePredef": {
				"id": 40,
				"name": "Dos light",
				"list": [
					{
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1336,
					"exoPredef": {
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7522,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7523,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7524,
							"numero": 2,
							"poids": 32,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7525,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7526,
							"numero": 4,
							"poids": 42,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521220366000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1337,
					"exoPredef": {
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7527,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7528,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7529,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7530,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7532,
							"numero": 4,
							"poids": 97,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521220366000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1338,
					"exoPredef": {
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7533,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7534,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7535,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7536,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7537,
							"numero": 4,
							"poids": 97,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521220366000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 263,
			"name": null,
			"date": 1521051226000,
			"seancePredef": {
				"id": 41,
				"name": "Pecs light",
				"list": [
					{
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A138",
						"name": "Dev incl haltères",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1333,
					"exoPredef": {
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7504,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7505,
							"numero": 1,
							"poids": 26,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7506,
							"numero": 2,
							"poids": 38,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7507,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7508,
							"numero": 4,
							"poids": 46,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7509,
							"numero": 5,
							"poids": 46,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521051226000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1334,
					"exoPredef": {
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7517,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7518,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7519,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7520,
							"numero": 3,
							"poids": 30,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7521,
							"numero": 4,
							"poids": 35,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521051226000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1335,
					"exoPredef": {
						"id": "A138",
						"name": "Dev incl haltères",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7510,
							"numero": 0,
							"poids": 16,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7511,
							"numero": 1,
							"poids": 24,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7512,
							"numero": 2,
							"poids": 32,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7513,
							"numero": 3,
							"poids": 32,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7514,
							"numero": 4,
							"poids": 32,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7515,
							"numero": 5,
							"poids": 32,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7516,
							"numero": 6,
							"poids": 16,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1521051226000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 262,
			"name": null,
			"date": 1520964860000,
			"seancePredef": {
				"id": 36,
				"name": "Biceps JO",
				"list": [
					{
						"id": "A11",
						"name": "BICEPS CURL EZ",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A142",
						"name": "Curl poulie assis",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1329,
					"exoPredef": {
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7487,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7489,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7492,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7493,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7496,
							"numero": 4,
							"poids": 35,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520964860000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1330,
					"exoPredef": {
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7488,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7490,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7491,
							"numero": 2,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7494,
							"numero": 3,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7495,
							"numero": 4,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520964860000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1331,
					"exoPredef": {
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7497,
							"numero": 0,
							"poids": 12,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7498,
							"numero": 1,
							"poids": 12,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7499,
							"numero": 2,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7500,
							"numero": 3,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520964860000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1332,
					"exoPredef": {
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7501,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7502,
							"numero": 1,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7503,
							"numero": 2,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520964860000,
					"numero": 3,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 261,
			"name": null,
			"date": 1520758863000,
			"seancePredef": {
				"id": 35,
				"name": "Triceps JO",
				"list": [
					{
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					{
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1323,
					"exoPredef": {
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7464,
							"numero": 0,
							"poids": 17.5,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7465,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7466,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7467,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 9.5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7468,
							"numero": 4,
							"poids": 38.5,
							"nbRepeat": 7,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7469,
							"numero": 5,
							"poids": 21,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1324,
					"exoPredef": {
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					"series": [
						{
							"id": 7470,
							"numero": 0,
							"poids": 21,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7471,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7472,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7473,
							"numero": 3,
							"poids": 38.5,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7474,
							"numero": 4,
							"poids": 24.5,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1325,
					"exoPredef": {
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7475,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7476,
							"numero": 1,
							"poids": 10,
							"nbRepeat": 11,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7477,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1326,
					"exoPredef": {
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7478,
							"numero": 0,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7479,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7480,
							"numero": 2,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1327,
					"exoPredef": {
						"id": "A128",
						"name": "Abcoaster",
						"comment": null,
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [
						{
							"id": 7481,
							"numero": 0,
							"poids": 0,
							"nbRepeat": 12,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7482,
							"numero": 1,
							"poids": 0,
							"nbRepeat": 12,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7483,
							"numero": 2,
							"poids": 0,
							"nbRepeat": 12,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7484,
							"numero": 3,
							"poids": 0,
							"nbRepeat": 12,
							"repos": 0,
							"type": "PDC",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1328,
					"exoPredef": {
						"id": "A44",
						"name": "GAINAGE",
						"comment": "",
						"image": null,
						"type": [
							"ABDO"
						]
					},
					"series": [
						{
							"id": 7485,
							"numero": 0,
							"poids": 0,
							"nbRepeat": 0,
							"repos": 0,
							"type": "TIME",
							"minute": 1,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7486,
							"numero": 1,
							"poids": 0,
							"nbRepeat": 0,
							"repos": 0,
							"type": "TIME",
							"minute": 1,
							"seconde": 0,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520758863000,
					"numero": 5,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 260,
			"name": null,
			"date": 1520679686000,
			"seancePredef": {
				"id": 40,
				"name": "Dos light",
				"list": [
					{
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1320,
					"exoPredef": {
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7449,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7450,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7451,
							"numero": 2,
							"poids": 32,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7452,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7453,
							"numero": 4,
							"poids": 42,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520679686000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1321,
					"exoPredef": {
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7460,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7461,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7462,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 13,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7463,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520679686000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1322,
					"exoPredef": {
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7454,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7455,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7456,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7457,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7458,
							"numero": 4,
							"poids": 97,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7459,
							"numero": 5,
							"poids": 40,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520679686000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 259,
			"name": null,
			"date": 1520421387000,
			"seancePredef": {
				"id": 22,
				"name": "Libre",
				"list": []
			},
			"exercices": [
				{
					"id": 1315,
					"exoPredef": {
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7429,
							"numero": 0,
							"poids": 120,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7430,
							"numero": 1,
							"poids": 220,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7431,
							"numero": 2,
							"poids": 340,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7432,
							"numero": 3,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7433,
							"numero": 4,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7434,
							"numero": 5,
							"poids": 430,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520421387000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1316,
					"exoPredef": {
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7435,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7438,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7441,
							"numero": 2,
							"poids": 70,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7444,
							"numero": 3,
							"poids": 82,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520421387000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1317,
					"exoPredef": {
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7436,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7439,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7442,
							"numero": 2,
							"poids": 70,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520421387000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1318,
					"exoPredef": {
						"id": "A54",
						"name": "MOLLETS ASSIS",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES",
							"MOLLET"
						]
					},
					"series": [
						{
							"id": 7437,
							"numero": 0,
							"poids": 35,
							"nbRepeat": 25,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7440,
							"numero": 1,
							"poids": 75,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7443,
							"numero": 2,
							"poids": 105,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7445,
							"numero": 3,
							"poids": 105,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520421387000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1319,
					"exoPredef": {
						"id": "A122",
						"name": "Adduction des hanches",
						"comment": null,
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7446,
							"numero": 0,
							"poids": 68,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7447,
							"numero": 1,
							"poids": 82,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7448,
							"numero": 2,
							"poids": 89,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520421387000,
					"numero": 4,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 258,
			"name": null,
			"date": 1520358528000,
			"seancePredef": {
				"id": 41,
				"name": "Pecs light",
				"list": [
					{
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					{
						"id": "A138",
						"name": "Dev incl haltères",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1312,
					"exoPredef": {
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7412,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7413,
							"numero": 1,
							"poids": 26,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7414,
							"numero": 2,
							"poids": 38,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7415,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7416,
							"numero": 4,
							"poids": 46,
							"nbRepeat": 4,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7417,
							"numero": 5,
							"poids": 46,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520358528000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1313,
					"exoPredef": {
						"id": "A97",
						"name": "DEV INCLINÉ MACHINE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7418,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7419,
							"numero": 1,
							"poids": 40,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7420,
							"numero": 2,
							"poids": 60,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7421,
							"numero": 3,
							"poids": 60,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7422,
							"numero": 4,
							"poids": 60,
							"nbRepeat": 7.5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7423,
							"numero": 5,
							"poids": 60,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520358528000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1314,
					"exoPredef": {
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7424,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7425,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7426,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7427,
							"numero": 3,
							"poids": 30,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7428,
							"numero": 4,
							"poids": 30,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520358528000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 257,
			"name": null,
			"date": 1520271143000,
			"seancePredef": {
				"id": 36,
				"name": "Biceps JO",
				"list": [
					{
						"id": "A11",
						"name": "BICEPS CURL EZ",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A142",
						"name": "Curl poulie assis",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1307,
					"exoPredef": {
						"id": "A129",
						"name": "Curl barre",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7392,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7394,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7397,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7398,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7401,
							"numero": 4,
							"poids": 35,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520271143000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1308,
					"exoPredef": {
						"id": "A141",
						"name": "Curl rotation",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7393,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7395,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7396,
							"numero": 2,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7399,
							"numero": 3,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7400,
							"numero": 4,
							"poids": 8,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520271143000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1309,
					"exoPredef": {
						"id": "A9",
						"name": "BICEPS BANC INCLINE",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7402,
							"numero": 0,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7403,
							"numero": 1,
							"poids": 12,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7404,
							"numero": 2,
							"poids": 14,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7405,
							"numero": 3,
							"poids": 14,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520271143000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1310,
					"exoPredef": {
						"id": "A142",
						"name": "Curl poulie assis",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7406,
							"numero": 0,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7407,
							"numero": 1,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7408,
							"numero": 2,
							"poids": 26,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520271143000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1311,
					"exoPredef": {
						"id": "A12",
						"name": "BICEPS PRISE MARTEAU",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7409,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7410,
							"numero": 1,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7411,
							"numero": 2,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520271143000,
					"numero": 4,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 256,
			"name": null,
			"date": 1520075955000,
			"seancePredef": {
				"id": 35,
				"name": "Triceps JO",
				"list": [
					{
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					{
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1303,
					"exoPredef": {
						"id": "A139",
						"name": "Triceps barre front poulie",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7375,
							"numero": 0,
							"poids": 17.5,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7376,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7377,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7378,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7379,
							"numero": 4,
							"poids": 35,
							"nbRepeat": 6,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7380,
							"numero": 5,
							"poids": 24.5,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520075955000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1304,
					"exoPredef": {
						"id": "A140",
						"name": "Triceps barre poulie haute",
						"comment": null,
						"image": null,
						"type": []
					},
					"series": [
						{
							"id": 7381,
							"numero": 0,
							"poids": 21,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7382,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7383,
							"numero": 2,
							"poids": 31.5,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7384,
							"numero": 3,
							"poids": 35,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7385,
							"numero": 4,
							"poids": 24,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520075955000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1305,
					"exoPredef": {
						"id": "A53",
						"name": "TRICEPS EXTENSION TETE",
						"comment": "triceps haltere au dessus de la tete",
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7386,
							"numero": 0,
							"poids": 8,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7387,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7388,
							"numero": 2,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520075955000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1306,
					"exoPredef": {
						"id": "A13",
						"name": "TRICEPS POULIE HAUTE Corde",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [
						{
							"id": 7389,
							"numero": 0,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7390,
							"numero": 1,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7391,
							"numero": 2,
							"poids": 25,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520075955000,
					"numero": 3,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 255,
			"name": null,
			"date": 1520009732000,
			"seancePredef": {
				"id": 38,
				"name": "Épaule JO",
				"list": [
					{
						"id": "A144",
						"name": "Développé nuque guidé",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A145",
						"name": "Antepulsion",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A146",
						"name": "Épaule rowing supination",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A71",
						"name": "ELEVATION LATERALE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					{
						"id": "A72",
						"name": "ELEVATION LATERALE HALTERE, penche en avant",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1298,
					"exoPredef": {
						"id": "A144",
						"name": "Développé nuque guidé",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7347,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7348,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 14,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7349,
							"numero": 2,
							"poids": 40,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7350,
							"numero": 3,
							"poids": 40,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7351,
							"numero": 4,
							"poids": 40,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7352,
							"numero": 5,
							"poids": 40,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520009732000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1299,
					"exoPredef": {
						"id": "A72",
						"name": "ELEVATION LATERALE HALTERE, penche en avant",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7353,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7355,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7357,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7359,
							"numero": 3,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7361,
							"numero": 4,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7363,
							"numero": 5,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520009732000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1300,
					"exoPredef": {
						"id": "A146",
						"name": "Épaule rowing supination",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7354,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7356,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7358,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7360,
							"numero": 3,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7362,
							"numero": 4,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7364,
							"numero": 5,
							"poids": 12,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520009732000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1301,
					"exoPredef": {
						"id": "A71",
						"name": "ELEVATION LATERALE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7365,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7366,
							"numero": 1,
							"poids": 8,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7367,
							"numero": 2,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7368,
							"numero": 3,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7369,
							"numero": 4,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7370,
							"numero": 5,
							"poids": 10,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520009732000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1302,
					"exoPredef": {
						"id": "A145",
						"name": "Antepulsion",
						"comment": null,
						"image": null,
						"type": [
							"EPAULES"
						]
					},
					"series": [
						{
							"id": 7371,
							"numero": 0,
							"poids": 6,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7372,
							"numero": 1,
							"poids": 6,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7373,
							"numero": 2,
							"poids": 8,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7374,
							"numero": 3,
							"poids": 8,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1520009732000,
					"numero": 4,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 254,
			"name": null,
			"date": 1519928033000,
			"seancePredef": {
				"id": 40,
				"name": "Dos light",
				"list": [
					{
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1295,
					"exoPredef": {
						"id": "A95",
						"name": "Shrug",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7330,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7333,
							"numero": 1,
							"poids": 28,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7337,
							"numero": 2,
							"poids": 32,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7340,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7343,
							"numero": 4,
							"poids": 42,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519928033000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1296,
					"exoPredef": {
						"id": "A27",
						"name": "TIRAGE ASSIS POULIS BASSE PRISE SERRE",
						"comment": "low row",
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7331,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7336,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7339,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7342,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7346,
							"numero": 4,
							"poids": 97,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519928033000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1297,
					"exoPredef": {
						"id": "A46",
						"name": "TIRAGE HAUT MACHINE PRONATION",
						"comment": null,
						"image": null,
						"type": [
							"DOS"
						]
					},
					"series": [
						{
							"id": 7332,
							"numero": 0,
							"poids": 47,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7334,
							"numero": 1,
							"poids": 57,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7338,
							"numero": 2,
							"poids": 77,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7341,
							"numero": 3,
							"poids": 87,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7344,
							"numero": 4,
							"poids": 97,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7345,
							"numero": 5,
							"poids": 47,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519928033000,
					"numero": 2,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 253,
			"name": null,
			"date": 1519927964000,
			"seancePredef": {
				"id": 8,
				"name": "Dos",
				"list": [
					{
						"id": "A11",
						"name": "BICEPS CURL EZ",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A19",
						"name": "TRACTION",
						"comment": "",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A20",
						"name": "TIRAGE BARRE ROWING",
						"comment": "",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A21",
						"name": "TIRAGE NUQUE",
						"comment": "",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A22",
						"name": "TIRAGE PRISE SERRE",
						"comment": "tirage prise triangle",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A23",
						"name": "BICEPS POULIE VIS A VIS",
						"comment": "",
						"image": null,
						"type": [
							"BRAS"
						]
					},
					{
						"id": "A24",
						"name": "OBLIQUE POULIE",
						"comment": "",
						"image": null,
						"type": [
							"DOS"
						]
					},
					{
						"id": "A44",
						"name": "GAINAGE",
						"comment": "",
						"image": null,
						"type": [
							"ABDO"
						]
					}
				]
			},
			"exercices": [],
			"salles": []
		},
		{
			"id": 252,
			"name": null,
			"date": 1519755029000,
			"seancePredef": {
				"id": 7,
				"name": "JAMBES",
				"list": [
					{
						"id": "A36",
						"name": "SQUAT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					{
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					}
				]
			},
			"exercices": [
				{
					"id": 1291,
					"exoPredef": {
						"id": "A54",
						"name": "MOLLETS ASSIS",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES",
							"MOLLET"
						]
					},
					"series": [
						{
							"id": 7320,
							"numero": 0,
							"poids": 40,
							"nbRepeat": 25,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7323,
							"numero": 1,
							"poids": 80,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7326,
							"numero": 2,
							"poids": 80,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7329,
							"numero": 3,
							"poids": 40,
							"nbRepeat": 30,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519755029000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1292,
					"exoPredef": {
						"id": "A37",
						"name": "PRESSE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7310,
							"numero": 0,
							"poids": 120,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7311,
							"numero": 1,
							"poids": 220,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7312,
							"numero": 2,
							"poids": 340,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7313,
							"numero": 3,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7314,
							"numero": 4,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7315,
							"numero": 5,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7316,
							"numero": 6,
							"poids": 400,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7317,
							"numero": 7,
							"poids": 240,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519755029000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1293,
					"exoPredef": {
						"id": "A43",
						"name": "EXTENSION JAMBE ARRIERE",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7318,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7321,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7324,
							"numero": 2,
							"poids": 70,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7327,
							"numero": 3,
							"poids": 77,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519755029000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1294,
					"exoPredef": {
						"id": "A42",
						"name": "EXTENSION JAMBE AVANT",
						"comment": "",
						"image": null,
						"type": [
							"JAMBES"
						]
					},
					"series": [
						{
							"id": 7319,
							"numero": 0,
							"poids": 49,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7322,
							"numero": 1,
							"poids": 56,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7325,
							"numero": 2,
							"poids": 70,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7328,
							"numero": 3,
							"poids": 77,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519755029000,
					"numero": 3,
					"repos": 0
				}
			],
			"salles": []
		},
		{
			"id": 251,
			"name": null,
			"date": 1519668287000,
			"seancePredef": {
				"id": 22,
				"name": "Libre",
				"list": []
			},
			"exercices": [
				{
					"id": 1285,
					"exoPredef": {
						"id": "A1",
						"name": "DEV COUCHE HALTERE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7295,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 16,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7296,
							"numero": 1,
							"poids": 15,
							"nbRepeat": 26,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7297,
							"numero": 2,
							"poids": 38,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7298,
							"numero": 3,
							"poids": 38,
							"nbRepeat": 8,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7299,
							"numero": 4,
							"poids": 44,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7300,
							"numero": 5,
							"poids": 44,
							"nbRepeat": 5,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519668287000,
					"numero": 0,
					"repos": 0
				},
				{
					"id": 1286,
					"exoPredef": {
						"id": "A73",
						"name": "DEV INCLINE BARRE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7301,
							"numero": 0,
							"poids": 40,
							"nbRepeat": 15,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7302,
							"numero": 1,
							"poids": 50,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7303,
							"numero": 2,
							"poids": 60,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7304,
							"numero": 3,
							"poids": 60,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7305,
							"numero": 4,
							"poids": 60,
							"nbRepeat": 9,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519668287000,
					"numero": 1,
					"repos": 0
				},
				{
					"id": 1287,
					"exoPredef": {
						"id": "A10",
						"name": "BICEPS CURL GIRONDA",
						"comment": null,
						"image": null,
						"type": [
							"BRAS"
						]
					},
					"series": [],
					"date": 1519668287000,
					"numero": 2,
					"repos": 0
				},
				{
					"id": 1288,
					"exoPredef": {
						"id": "A6",
						"name": "ECARTE MACHINE",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [],
					"date": 1519668287000,
					"numero": 3,
					"repos": 0
				},
				{
					"id": 1289,
					"exoPredef": {
						"id": "A116",
						"name": "PRESSE pecs horizontal",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [],
					"date": 1519668287000,
					"numero": 4,
					"repos": 0
				},
				{
					"id": 1290,
					"exoPredef": {
						"id": "A115",
						"name": "PRESSE pêc fly",
						"comment": null,
						"image": null,
						"type": [
							"PECTORAUX"
						]
					},
					"series": [
						{
							"id": 7306,
							"numero": 0,
							"poids": 20,
							"nbRepeat": 20,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7307,
							"numero": 1,
							"poids": 30,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7308,
							"numero": 2,
							"poids": 30,
							"nbRepeat": 12,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						},
						{
							"id": 7309,
							"numero": 3,
							"poids": 30,
							"nbRepeat": 10,
							"repos": 0,
							"type": "NORMAL",
							"minute": null,
							"seconde": null,
							"leste": null,
							"forcer": null,
							"neg": null,
							"comment": "",
							"unilateral": null,
							"serie": null
						}
					],
					"date": 1519668287000,
					"numero": 5,
					"repos": 0
				}
			],
			"salles": []
		}
	];
}
