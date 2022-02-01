import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    const pathArr = this.router.url.split('/');
    const productName = pathArr[pathArr.length - 1];
    this.product = this.productService.getProductByName(productName);
  }
}
