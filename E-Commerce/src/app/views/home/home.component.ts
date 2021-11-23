import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private products:ProductsService ) { }

  allProducts:Object = {}

  ngOnInit(): void {
    this.getAllProducts()
  }
  
  getAllProducts(){
    this.products.getAllProducts().subscribe(data => {
      this.allProducts = data;
      console.log(this.allProducts);
    })
  }

}
