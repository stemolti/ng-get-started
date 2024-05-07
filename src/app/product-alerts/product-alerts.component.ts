import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.entity';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {


  /* 
  PASS DATA TO A CHILD

  The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.

  So the child component receive the input from outside to inside.
  */
@Input()
product: Product | undefined;


/* 
PASS DATA TO A PARENT

The child component needs to pass the data to the parent component.

The child component needs to emit an event when the user, for example, clicks a button and the parent component needs to respond to the event.


So in the child component class, define a property with an @Output() decorator and an instance of EventEmitter(). 

Configuring the child component with an @Output() allows it to emit an event when the value of the property with the @Output decorator changes.

*/

@Output()
notify = new EventEmitter();

}
