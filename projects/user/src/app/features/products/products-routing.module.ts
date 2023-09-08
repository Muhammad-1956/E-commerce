import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'listing', pathMatch: 'full'},
  {path:'listing',component: ProductListingComponent},
  {path: 'listing/product-details/:id', redirectTo:'product-details/:id', pathMatch: 'full'},
  {path: 'product-details/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
