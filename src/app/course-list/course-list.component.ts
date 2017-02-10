import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

courseList = [
    {
      title: "Курс 1",
      id: "1"
    },
    {
      title: "Курс 2",
      id: "2"
    },
    {
      title: "Курс 3",
      id: "3"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
