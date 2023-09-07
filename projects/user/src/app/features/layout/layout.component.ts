import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SharedModule } from "../../shared/shared.module";
import { Observable, Subject, Subscription } from 'rxjs';
import { CartService } from '../cart/services/cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isButtonActive= false;
  cart:any[]=[]
  show = true
  constructor(private service: AuthService,private ngZone: NgZone){
    this.spin();
  }

  logout(){
    this.service.logout();
  }

  toggleButton() {
    this.isButtonActive = !this.isButtonActive;
  }
  spin() {
    this.ngZone.run(() => {
      setTimeout(() => {
        this.show= false;
      }, 1000);
    });
  }
}
