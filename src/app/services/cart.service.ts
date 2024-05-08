import { Injectable } from '@angular/core';
import { Product } from '../product.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient){
  }

  items: Product[] = [];

  // Why need I to speciefy the type T in get<T> like in this example?
  // get<{type: string, price: number}[]>('/assets/shipping.json')
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }
  /*
  The addToCart() method appends a product to an array of items
  */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /*
  The getItems() method collects the items users add to the cart and returns each 
  item with its associated quantity
  */
  getItems() {
    return this.items;
  }
  // The clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}
