import { Component } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

/*

SPREAD ITERATOR

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })

*/ 

products = [...products];

}
