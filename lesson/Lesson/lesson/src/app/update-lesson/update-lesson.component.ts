import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Lesson } from '../lesson';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lesson',
  templateUrl: './update-lesson.component.html',
  styleUrls: ['./update-lesson.component.css']
})
export class UpdateLessonComponent implements OnInit {


  lesson = new Lesson();



  constructor(private lessonService : LessonService , private router : Router) { }

  ngOnInit(): void {
  }



  onUpdate(){

    this.lessonService.update("lessons" , this.lesson).subscribe((response : any) => {
      console.log(response);

      this.showAlert('lessons updated successfully');
      this.router.navigateByUrl("/lesson-list");

    })

  }
  showAlert(message: string) {
    alert(message);
  }
}
