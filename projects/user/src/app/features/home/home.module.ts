import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
    declarations: [
        HomeComponent,
        ContactUsComponent,
        BlogComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        SharedModule,
        ProductsModule
    ]
})
export class HomeModule { }
