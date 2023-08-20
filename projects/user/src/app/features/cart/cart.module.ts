import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListingComponent } from './components/cart-listing/cart-listing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CartListingComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CartModule { }
