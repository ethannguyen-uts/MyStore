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
  cartItemUpdate = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      if (product.quantity === 0) {
        this.listProduct.splice(productIndex, 1);
      } else {
        this.listProduct[productIndex].quantity = product.quantity;
      }
      this.getTotal();
    }
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
    const result = this.listProduct.reduce(
      (a: number, b: Product) => a + b.price * b.quantity,
      0
    );
    this.total = Math.round(result * 100) / 100;
    return this.total;
  };
}
