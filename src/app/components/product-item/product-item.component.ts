import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  selectedQuantity: number = 1;
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  add = (product: Product): void => {
    product.quantity = this.selectedQuantity;
    this.addToCart.emit(product);
  };
}
