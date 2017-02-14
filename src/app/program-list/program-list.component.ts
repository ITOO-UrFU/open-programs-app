import { Component, OnInit } from '@angular/core';
import { DisciplinesService } from 'app/disciplines.service';
import { Response } from '@angular/http';

import { Discipline } from 'app/discipline/discipline';


@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  providers: [DisciplinesService],
})
export class ProgramListComponent implements OnInit {
  DisciplinesList: Discipline[];
  DisciplineListArray: any[] = [];

  loading: boolean = true;

  constructor(
              private _disciplinesService: DisciplinesService
            ) { }

  ngOnInit() {
    this.getDisciplinesList();

    console.log(this.DisciplinesList);
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  
getDisciplinesList(){ 
  this._disciplinesService.getAllDisciplines()
  .subscribe(disciplinesList => { 
    this.DisciplinesList = disciplinesList; 
    this.DisciplineListArray[0] = disciplinesList.filter(x => x.semester == 1 || x.semester == 2);
    this.DisciplineListArray[1] = disciplinesList.filter(x => x.semester == 3 || x.semester == 4);
    this.DisciplineListArray[2] = disciplinesList.filter(x => x.semester == 5 || x.semester == 6);
    this.DisciplineListArray[3] = disciplinesList.filter(x => x.semester == 7 || x.semester == 8);
    this.loading = false; 
  });
}


}
