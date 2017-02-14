import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Discipline } from 'app/discipline/discipline';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})

export class DisciplineComponent implements OnInit {
@Input() discipline: Discipline;

  constructor() { }

  ngOnInit() {
  }

}
