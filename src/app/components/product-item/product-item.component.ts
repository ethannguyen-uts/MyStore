import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  add = (product: Product): void => {
    this.addToCart.emit(product);
  };
}
