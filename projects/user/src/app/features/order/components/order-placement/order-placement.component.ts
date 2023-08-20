import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.scss']
})

export class OrderPlacementComponent {
  show = true;

  constructor(private title: Title){
    this.show = false
    this.title.setTitle('Order')
  }
}
