import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

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
