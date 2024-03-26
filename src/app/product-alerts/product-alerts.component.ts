import { Component, Input } from '@angular/core';
import { Product } from '../product.entity';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {


  /* 
  The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  */
@Input()
product: Product | undefined;

}
