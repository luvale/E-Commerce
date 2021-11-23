import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = "https://fakestoreapi.com/auth/login";

  constructor(private http:HttpClient) { }

  loginEmail(user:any){
    return this.http.post(this.Url, {
      username: user.username,
      password: user.password
    });
  }
}
