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
    this.auth.loginEmail(form).subscribe( response => {
      const objectKeys = Object.keys(response) 
      if(objectKeys.length == 1){
        localStorage.setItem('token', JSON.stringify(response));
        this.router.navigateByUrl('home');
      } else {
        alert('User or password is incorrect 😔')
      }
    })
  }
}
