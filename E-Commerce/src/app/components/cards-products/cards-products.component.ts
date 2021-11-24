import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css']
})
export class CardsProductsComponent implements OnInit, OnChanges {
  
  allProducts:any = [];
  cart:any = [];
  filteredProducts:any = [];
  @Input()
  getSearch:string = '';
  @Input()
  getCategory:string = '';

  constructor(private products:ProductsService ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnChanges(): void {
    this.filterProducts();
    this.search();
  }

  getAllProducts(){
    this.products.getAllProducts().subscribe(data => {
      this.allProducts = data;
    })
  }

  search() {
    if (this.getSearch == '') return this.allProducts
    return this.filteredProducts = this.allProducts.filter((product:any) => 
    product.title.toUpperCase().includes(this.getSearch.toUpperCase()))
  }

  filterProducts(){
    this.filteredProducts = this.allProducts.filter((product:any) => product.category == this.getCategory);
  }

  addToCart(id:string, item:Object){
    const productsSelect = this.cart.find((product:any) => product.id == id);
    if (productsSelect === undefined) {
      this.cart.push({
        item,
        amount: 1
      })
      console.log(this.cart)
    }
  }

}
