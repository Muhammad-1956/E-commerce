import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';

const routes: Routes = [
  {path: '', component: OrderPlacementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
