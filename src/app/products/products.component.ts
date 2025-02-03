import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import  ProductsCard  from '../../../public/assets/product.json'
import { Product } from '../products'
import { RatingPipe } from '../rating.pipe';
import { AddToCartService } from '../service/cart.service';
import { RequestService } from '../service/request.service';


@Component({
  selector: 'app-products',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, CurrencyPipe, RatingPipe, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any ;
  constructor(private _AddToCartService : AddToCartService, private _RequestService:RequestService){}

  ngOnInit(){
    this._RequestService.getProductList().subscribe((response:any) => this.products = response.products);
  }

  addToCart(product: any) {
  this._AddToCartService.addToCart(product);
  }
}
