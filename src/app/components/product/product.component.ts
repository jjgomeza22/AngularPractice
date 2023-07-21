import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
