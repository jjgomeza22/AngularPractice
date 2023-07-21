import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product!: Product;

  @Output()
  private addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.addedProduct.emit(this.product);
  }

}
