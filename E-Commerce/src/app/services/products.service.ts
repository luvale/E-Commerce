import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private Url = "https://fakestoreapi.com/products"; 

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.Url)
  }
}
