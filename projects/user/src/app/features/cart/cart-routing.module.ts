import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListingComponent } from './components/cart-listing/cart-listing.component';

const routes: Routes = [
  {path: '', component: CartListingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
