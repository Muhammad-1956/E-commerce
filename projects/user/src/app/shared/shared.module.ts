import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SliderComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // NgbCarouselModule
  ],
  exports: [
    SliderComponent,
    SpinnerComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
