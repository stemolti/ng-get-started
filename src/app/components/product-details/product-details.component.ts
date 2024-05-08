import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.entity';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

/*

We'll use the Angular Router to combine the products data and route information to display the specific details for each product.

*/

product: Product | undefined;

/* ActivatedRoute has following properties :
  snapshot is ActivatedRootSnapshot
  title, url, params, queryParams, fragment, paramMap, queryParamMap data are Observable
  root, parent, firstChild, children, pathFromRoot data are ActivatedRoute
  outlet is string
  component is Type<any>, 
  routeConfig is Route
  toString() method to...

  ActivatedRoute is specific to each component that the Angular Router loads. 
  
  ActivatedRoute contains information about the route and the route's parameters.

  By injecting ActivatedRoute, you are configuring the component to use a service. 
*/

// Inject the cart service by adding it to the constructor()
constructor( private route: ActivatedRoute, private cartService: CartService){

}


addToCart(product: Product){
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

/*

The implements OnInit statement indicates that the class implements the OnInit interface, requiring the implementation of the ngOnInit method for initialization tasks when the component is created.

In the ngOnInit() method, extract the productId from the route parameters and find the corresponding product in the products array

To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. 

ActivatedRoute    | ActivatedRouteSnapshot    | interface ParamMap    | string  
route             > snapshot                  > paramsMap             > id
*/

  ngOnInit() {
    console.log('Componente caricato');
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }













}
