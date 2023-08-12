import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './components/ads/ads.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AdsComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    AdsComponent,
    FeedbackComponent
  ]
})
export class SidebarModule { }
