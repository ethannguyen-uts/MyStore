import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService, CART_STATUS } from '../../services/cart.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  user: User = new User();
  listProduct: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.addToCart(5, {
      quantity: 1,
      name: 'Book',
      price: 9.99,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'You can read it!',
    });

    this.updateCart();
  }

  updateCart = (): void => {
    this.listProduct = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  };
  cartItemUpdate = (product: Product): void => {
    this.listProduct = this.cartService.cartItemUpdate(product);
    this.total = this.cartService.getTotal();
  };
  removeProduct = (product: Product): void => {
    this.listProduct = this.cartService.removeFromCart(product);
    this.total = this.cartService.getTotal();
  };
  removeAll = (): void => {
    this.listProduct = this.cartService.refreshCart();
    this.updateCart();
  };
  onSubmit = () => {
    this.cartService.setUser(this.user);
    this.cartService.setStatus(CART_STATUS.complete);
    this.router.navigateByUrl('/confirmation');
  };
}
