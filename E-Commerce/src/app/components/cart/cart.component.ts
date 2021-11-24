import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any = [];
  base:number = 1;
  total:number= 0;

  constructor() { }

  ngOnInit(): void {
    this.cart = (JSON.parse(localStorage.getItem('cart')!));
    console.log(this.cart)
    this.getTotal();
  }

  changeAmount(base:number, product:any){
    if (product.amount + base < 1) {
      product.amount === 1;
    }else{
      product.amount= product.amount + base;
      this.getTotal();
    } 
  }
  getTotal() {
    if (this.cart.length == 0) {
      this.total = 0;
    } else {
    this.total = this.cart.map((product:any) => product.item.price * product.amount)
    .reduce((acc:number, item:number) => acc +=item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  deleteItem(product:any){
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.getTotal();
    }
    return this.cart;
  }
}
