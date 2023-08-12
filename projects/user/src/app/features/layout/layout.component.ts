import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isButtonActive= false;
  constructor(private service: AuthService){

  }
  logout(){
    this.service.logout();
  }

    toggleButton() {
      this.isButtonActive = !this.isButtonActive;
    }
}
