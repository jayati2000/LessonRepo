import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {


  lessons: Lesson[] = []

  page: number = 0;


  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {

    this.getLessons();

  }
  private getLessons() {
    this.lessonService.get("lessons", this.page).subscribe((response: any) => {
      console.log(response);
      this.lessons = response.content;
    });
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.getLessons();


    }


  }


  next() {

    this.page++;
    this.getLessons();


  }
}