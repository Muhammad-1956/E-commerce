import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'; import 'firebase/compat/auth'; import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: any
  tokens_array: any;
  products: any[]= []
  constructor(private auth: AngularFireAuth, private router: Router) {

  }
  //Login Function
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email , password).then((resolve: any)=>{
      this.userToken = resolve.user._delegate.accessToken;

      if("token" in localStorage){
        this.router.navigate(['features/home/home'])
      }else{
        localStorage.setItem("token", JSON.stringify(this.products));
        this.router.navigate(['features/home/home'])
      }
    },
    err=>{
      alert(err.message)
      this.router.navigate([''])
    })
  }

  //Register Function
  register(email:string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
      alert('Registeration is successful')
      this.router.navigate([''])
    },
    err=>{
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }


  //Logout Function
  logout(){
    this.auth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate([''])
    },
    err => {
      alert(err.message)
    })
  }

  //Sign in With Google Function
  signInWithGoogle(){
    return this.auth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['features/home'])
      // localStorage.setItem('token', JSON.stringify(res.user?.uid));
      localStorage.setItem('token', JSON.stringify(this.products));
    }, err =>{
      alert(err.message)
    })
  }

}
