import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';


@NgModule({
  declarations: [
    OrderPlacementComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
