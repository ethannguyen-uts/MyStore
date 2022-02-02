import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listProduct: Product[] = [];
  total: number = 0;
  constructor() {}

  addToCart = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex == -1) {
      this.listProduct.push(product);
    } else {
      this.listProduct[productIndex].quantity += product.quantity;
    }
    this.total += product.price * product.quantity;
    return this.listProduct;
  };
  removeFromCart = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      this.listProduct.splice(productIndex, 1);
    }
    return this.listProduct;
  };
  reduceQuantity = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      const productQuantity = this.listProduct[productIndex].quantity;
      productQuantity > 1
        ? this.listProduct[productIndex].quantity--
        : this.listProduct.splice(productIndex, 1);
      this.total -= this.listProduct[productIndex].price;
    } else throw new Error('Product does not exists in the cart');
    return this.listProduct;
  };
  getCart = (): Product[] => {
    return this.listProduct;
  };
  getTotal = (): number => {
    return this.total;
  };
}
