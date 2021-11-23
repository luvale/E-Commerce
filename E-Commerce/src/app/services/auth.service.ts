import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = "https://fakestoreapi.com/auth/login";
  invocation = new XMLHttpRequest();

  constructor(private http:HttpClient) { }

  loginEmail(user:any){
    return this.http.post(this.Url, {
      username: user.username,
      password: user.password
    });
  }
}
