import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {

  lesson = new Lesson();

  constructor(private lessonService: LessonService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public data = {
    lessonId: '',
    lessonName: '',
    lessonDescription: '',
    lessonStatus : ''
  }


  onSubmit() {


    console.log(this.lesson);
    this.lessonService.add("lessons", this.lesson).subscribe((response: any) => {
      console.log(response);

      this.showAlert("lesson added successfully");
      this.router.navigateByUrl("/lesson-list");


    });
  }

  showAlert(message: string) {
    alert(message);
  }

}
