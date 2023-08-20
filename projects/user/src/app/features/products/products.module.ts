import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports:[
    ProductListingComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
