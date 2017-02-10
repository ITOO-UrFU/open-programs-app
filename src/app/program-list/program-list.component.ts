import { Component, OnInit } from '@angular/core';
import { DisciplinesService } from 'app/disciplines.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  providers: [DisciplinesService],
})
export class ProgramListComponent implements OnInit {
  DisciplinesList: any = [];
  
  loading: boolean;
  DisciplinesList1: any = [];
  DisciplinesList2: any = [];
  DisciplinesList3: any = [];
  DisciplinesList4: any = [];

  constructor(private _disciplinesService: DisciplinesService) { }

  ngOnInit() {
    this.loading = true;
    this.DisciplinesList = this.getDisciplinesList();
    console.log(this.DisciplinesList)
  }

  getDisciplinesList(): any[] {
    let result = [];
    this._disciplinesService.getAllDisciplines()
      .subscribe((disciplinesList: Response) => {
        for (let index in disciplinesList) {
          let discipline = disciplinesList[index];
          
          if(discipline.semester != null){
              if( discipline.semester==1 || discipline.semester==2 ){
                discipline.year = 1;
                this.DisciplinesList1.push(discipline);
              }
              
              if( discipline.semester==3 || discipline.semester==4 ){
                discipline.year = 2;
                this.DisciplinesList2.push(discipline);
              }
              
              if( discipline.semester==5 || discipline.semester==6 ){
                discipline.year = 3;
                this.DisciplinesList3.push(discipline);
              }
              
              if( discipline.semester==7 || discipline.semester==8 ){
                discipline.year = 4;
                this.DisciplinesList4.push(discipline);
              }
          }
          else{
            discipline.year = 0;
          }
          this.loading = false;
          //let result = disciplinesList;
          //console.log(result)
          result.push(discipline);
        }
      });
    return result;
  }
}
