import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-lesson',
  templateUrl: './delete-lesson.component.html',
  styleUrls: ['./delete-lesson.component.css']
})
export class DeleteLessonComponent implements OnInit {


  lesson = new Lesson();

  constructor(private lessonService : LessonService , private router : Router) { }

  ngOnInit(): void {
  }


  onDelete(){

    console.log(this.lesson);
    this.lessonService.delete("lessons", this.lesson).subscribe((response: any) => {
      console.log(response);
     
     
      this.showAlert('lesson deleted successfully');
      this.router.navigateByUrl("/lesson-list");

  
    });

  }

  showAlert(message: string) {
    alert(message);
  }

}
