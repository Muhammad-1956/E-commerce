import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
  ],
  exports:[
    RouterModule
  ]
})
export class FeaturesModule { }
