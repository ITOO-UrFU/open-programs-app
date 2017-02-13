import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramListComponent } from 'app/program-list/program-list.component';
import { ProgramComponent } from 'app/program/program.component';

import { CourseListComponent } from 'app/course-list/course-list.component';
import { CourseComponent } from 'app/course/course.component';
import { NavigationComponent } from 'app/navigation/navigation.component';
import { AppComponent } from 'app/app.component';

const routes: Routes = [
  {
    path: 'program-list',
    component: ProgramListComponent,
    data: {          
       title: 'Список программ'         
      },
    children: [
        {
            path: ':id',
            component: ProgramComponent
        }
    ]
  },

  {
    path: 'course-list',
    component: CourseListComponent,    
    data: {          
       title: 'Список курсов'         
      },
    children: [
        {
            path: ':id',
            component: CourseComponent
        }
    ]
  },

  {
    path: 'home',
    redirectTo: '/',
    pathMatch:'full',
    data: {          
       title: 'Главная'         
      },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{ }

