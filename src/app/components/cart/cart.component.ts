import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  // Why items is working even before the injection of cartService?
  // Is it normal?
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }
}
