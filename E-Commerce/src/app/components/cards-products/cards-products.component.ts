import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})
export class CardsProductsComponent implements OnInit {
  
  allProducts:Object = {}

  constructor(private products:ProductsService ) { }

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
