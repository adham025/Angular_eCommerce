import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import  ProductsCard  from '../../../public/assets/product.json'
import { Product } from '../products'
import { RatingPipe } from '../rating.pipe';
import { DiscountPipe } from '../discount.pipe';
import { RequestService } from '../service/request.service';
import { AddToCartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RatingPipe, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() id : string = ''
  selectedProduct !: Product;
  constructor(private activatedRoute: ActivatedRoute, private _RequestService:RequestService, private _AddToCartService: AddToCartService) {}

  ngOnChanges(){
    console.log(this.id)
  }

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params['id'];
    this._RequestService.getProductDetails(productId).subscribe((response:any) => this.selectedProduct = response);
}
addToCart(product: any) {
  this._AddToCartService.addToCart(product);
  }
}

