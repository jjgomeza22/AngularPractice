import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  public product!: Product;

  @Output()
  private addedProduct = new EventEmitter<Product>();

  constructor() { }

  addToCart(){
    this.addedProduct.emit(this.product);
  }

}
