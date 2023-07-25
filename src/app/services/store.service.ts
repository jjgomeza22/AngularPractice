import { Injectable } from '@angular/core';
import { Product } from '../components/models/Product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public myShoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  public addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
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
