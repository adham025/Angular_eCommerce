import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartProducts: Product[] = [];
  constructor() {}
  private cart = new BehaviorSubject<Product[]>(this.cartProducts);
  getCart():Observable<Product[]> {
    return this.cart.asObservable();
  }

  addToCart(newProduct: Product) {
    let productInCart = this.cartProducts.find((item) => item.id === newProduct.id);
    if(productInCart){
      productInCart.quantity = (productInCart.quantity || 1) + 1;
    }else {
      this.cartProducts.push({ ...newProduct, quantity: 1 });
    }
    this.cart.next([...this.cartProducts]);
  console.log('Cart Updated:', this.cartProducts);
  }

  increaseQuantity(id: number){
let product = this.cartProducts.find((item) => item.id === id);
if(product){
  if((product.quantity || 1) < product.stock){
    product.quantity = (product.quantity || 1) + 1;
    this.cart.next([...this.cartProducts]);
  }
}}

  decreaseQuantity(id: number){
let product = this.cartProducts.find((item) => item.id === id);
if (product && product.quantity && product.quantity > 1) {
  product.quantity--;
} else {
  this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
}
this.cart.next([...this.cartProducts]);
}

remove(id: number) {
  this.cartProducts = this.cartProducts.filter(p => p.id !== id);
this.cart.next([...this.cartProducts]);
}

clearCart(){
  this.cartProducts = []
this.cart.next([...this.cartProducts]);
}
}


