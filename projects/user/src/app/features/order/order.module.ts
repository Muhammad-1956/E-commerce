import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    OrderPlacementComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
