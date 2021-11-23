import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private auth:AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Login(form:Object){
    console.log(form);
    this.auth.loginEmail(form).subscribe(token => {
      localStorage.setItem('token', JSON.stringify(token));
      // this.router.navigateByUrl('home')
    })
  }
}
