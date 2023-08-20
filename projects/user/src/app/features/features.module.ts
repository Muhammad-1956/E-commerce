import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        RouterModule
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        RouterModule,
        SharedModule
    ]
})
export class FeaturesModule { }
