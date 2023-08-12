import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from "../sidebar/sidebar.module";
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SidebarModule,
        SharedModule,
        ProductsModule
    ]
})
export class HomeModule { }
