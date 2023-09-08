import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: FormGroup
  constructor(private fb: FormBuilder, private service: AuthService, private title: Title){
    this.createForm();
    this.title.setTitle("Sign Up")
  }
  //Create Reactive Form Function
  createForm(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    })
  }

  //Register Function
  register(){
    this.service.register(this.registerForm.value.email, this.registerForm.value.password)
  }
}
