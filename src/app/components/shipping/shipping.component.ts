import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService){
  }

  /*
  shippingCosts!: The exclamation point ! is a TypeScript operator indicating that the variable can be initialized later.
  The type of data the shippingCosts Observable will emit. In this case, the Observable will emit an array of objects, each of which has a type property of type string and a price property of type number.
  */
 shippingCosts!: Observable<{type: string, price: number}[]>;

 ngOnInit(): void {
  this.shippingCosts = this.cartService.getShippingPrices();
}
}
