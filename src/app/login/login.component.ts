import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firstName: string
  lastName: string
  passWord: number
  city: string
  cheked:boolean

  logIn() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.passWord)
    console.log(this.city)
    console.log(this.cheked)

  }

}
