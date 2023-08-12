import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListingComponent } from './components/cart-listing/cart-listing.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RemoveItemComponent } from './components/remove-item/remove-item.component';


@NgModule({
  declarations: [
    CartListingComponent,
    AddItemComponent,
    RemoveItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
