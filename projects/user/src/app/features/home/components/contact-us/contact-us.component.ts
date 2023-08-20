import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  checkboxValue = false;
  show= true;

  constructor(private title: Title){
    this.show = false
    this.title.setTitle('Contact us')
  }
  checked(){
    this.checkboxValue != this.checkboxValue
  }
}
