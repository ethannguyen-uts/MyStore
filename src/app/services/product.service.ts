import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];
  constructor(private http: HttpClient) {}
  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>('./assets/data.json');
  };
  setProductList = (productList: Product[]) => {
    this.productList = productList;
  };
  getProductByName = (productName: string): Product => {
    return this.productList.filter((item) => item.name === productName)[0];
  };
}
