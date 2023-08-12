import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private service: AuthService){
    this.createForm();
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
