import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';

import { Product } from '../models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public totalPrice: number = 0;
  public totalProducst: number = 0;
  public myShoppingCart: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppinCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((data) => {
      this.products = data;
    });
  }

  public addProductToCart(product: Product) {
    this.storeService.myShoppingCart.push(product);
    this.totalPrice = this.storeService.getTotal();
  }

}
