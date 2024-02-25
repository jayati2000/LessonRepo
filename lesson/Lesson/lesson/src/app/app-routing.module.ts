import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { DeleteLessonComponent } from './delete-lesson/delete-lesson.component';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'add-lesson',
    component : AddLessonComponent
  },
  {
    path : 'update-lesson',
    component : UpdateLessonComponent
  },
  {
    path : 'delete-lesson',
    component : DeleteLessonComponent
  },
  {
    path : 'lesson-list',
    component : LessonListComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


