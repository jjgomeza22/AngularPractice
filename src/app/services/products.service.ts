import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}
