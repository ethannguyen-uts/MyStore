import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];
  constructor(private http: HttpClient) {
    this.getProducts().subscribe((res: Product[]) => {
      res.map((product: Product) => (product.quantity = 1));
      this.productList = res;
      console.log('Loading product service');
      console.log(this.productList);
    });
  }
  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>('./assets/data.json');
  };
  setProductList = (productList: Product[]) => {
    this.productList = productList;
  };
  getProductByName = (productName: string): Product | undefined => {
    return this.productList.find((item) => item.name === productName);
  };
}
