import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['lesson-list']);
  }
}


//   passwordValidator(control: any): { [key: string]: boolean } | null {
//     const value: string = control.value;
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!regex.test(value)) {
//       return { 'pattern': true };
//     }

//     return null;
//   }
// }
