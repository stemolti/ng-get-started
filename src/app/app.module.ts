import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
/*
Added component to App module to make
the component available to other components in the application
*/
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //Adding routes for list of product list and 
    // product-details and specifying components that
    // the application should display
    RouterModule.forRoot([
      {
        path: '', component: ProductListComponent
      },
      { 
        /*
        
        You can use dynamic values to generate the link. For a dynamic link, pass an array of path segments, followed by the params for each segment. For example, ['/team', teamId, 'user', userName, {details: true}] generates a link to /team/11/user/bob;details=true.
        
        The ProductDetailsComponent handles the display of each product. The Angular Router displays components based on the browser's URL and your defined routes.
        */
        path: 'products/:productId', component: ProductDetailsComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'shipping', component: ShippingComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
