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
    //return this.http.post(this.Url, user);
    /* 
    return fetch(this.Url, {
          method:'POST',
          body: user,
      })
      */
    return fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify(user),
        mode: 'cors',
    }) .then(res=>res.json())
    .then(json=>console.log(json))
  }
}
