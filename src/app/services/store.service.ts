import { Injectable } from '@angular/core';
import { Product } from '../components/models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public myShoppingCart: Product[] = [];

  public addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  public getTotal(): number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  public getTotalProduct(): number {
    return this.myShoppingCart.length;
  }

  public getMyShoppinCart() {
    return this.myShoppingCart;
  }

  constructor() { }
}
