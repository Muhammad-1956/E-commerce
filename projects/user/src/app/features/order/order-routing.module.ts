import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  {path: '', component: OrderPlacementComponent},
  {path: 'order-history', component: OrderHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
