import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { DeleteLessonComponent } from './delete-lesson/delete-lesson.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AddLessonComponent,
    DeleteLessonComponent,
    LessonListComponent,
    UpdateLessonComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
