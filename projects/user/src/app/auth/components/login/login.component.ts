import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private service: AuthService, private title:Title){
    this.createForm();
    this.title.setTitle('Login');
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    })
  }
  login(){
    this.service.login(this.loginForm.value.email, this.loginForm.value.password)
  }
  signInWithGoogle(){
    this.service.signInWithGoogle()
  }
}
