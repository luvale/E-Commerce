import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})
export class CardsProductsComponent implements OnInit, OnChanges {
  
  allProducts:any = [];
  filteredProducts:any = [];
  @Input()
  getSearch:string = '';

  constructor(private products:ProductsService ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnChanges(): void {
    this.search();
    console.log(this.filteredProducts);
    console.log(this.getSearch);
  }

  getAllProducts(){
    this.products.getAllProducts().subscribe(data => {
      this.allProducts = data;
      console.log(this.allProducts);
    })
  }

  search() {
    if (this.getSearch == '') return this.allProducts
    return this.filteredProducts = this.allProducts.filter((product:any) => 
    product.title.toUpperCase().includes(this.getSearch.toUpperCase()))
  }

}
