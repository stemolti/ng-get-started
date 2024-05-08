import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(
    private cartService: CartService, private formBuilder: FormBuilder
  ) { }
  
  // Why items is working even before the injection of cartService?
  // Is it normal?
  items = this.cartService.getItems();

  /*
  Inject the FormBuilder service in the CartComponent constructor(). This service is part of the ReactiveFormsModule module, which you've already imported.
  */
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  /*
  an onSubmit() method to process the form. This method allows users to submit their name and address. In addition, this method uses the clearCart() method of the CartService to reset the form and clear the cart.
  */
  onSubmit(){
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();


  }

}
