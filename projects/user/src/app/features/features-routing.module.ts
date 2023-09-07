import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {path:'home',
      loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      },
      {path:'products',
      loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
      },
      {path:'cart',
      loadChildren:() => import('./cart/cart.module').then(m => m.CartModule)
      },
      {path:'order',
      loadChildren:() => import('./order/order.module').then(m => m.OrderModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
