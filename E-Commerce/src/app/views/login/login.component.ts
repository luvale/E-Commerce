import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  Login(form:Object){
    // console.log(form);
    this.auth.loginEmail(form)//.subscribe(data => console.log(data))
  }
// Access to XMLHttpRequest at 'https://fakestoreapi.com/auth/login' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
