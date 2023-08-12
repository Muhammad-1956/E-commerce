import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: any
  tokens_array: any;
  products: any[]= []
  constructor(private auth: AngularFireAuth, private router: Router) {

  }
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email , password).then((resolve: any)=>{
      this.userToken = resolve.user._delegate.accessToken;

      if("token" in localStorage){
        this.router.navigate(['features/home'])
      }else{
        localStorage.setItem("token", JSON.stringify(this.products));
        this.router.navigate(['features/home'])
      }

      // if(res.user?.emailVerified == true){
      //   this.router.navigate([''])
      // } else {
      //   this.router.navigate(['/verify-email'])
      // }
    },
    err=>{
      alert(err.message)
      this.router.navigate([''])
    })
  }
  // login(email: string, password: string) {
  //   return this.auth.signInWithEmailAndPassword(email, password).then((resolve: any) => {
  //     this.userToken = resolve.user._delegate.accessToken;
  //     if ("tokens" in localStorage) {
  //       this.tokens_array = JSON.parse(localStorage.getItem("tokens")!);
  //     } else {
  //       this.tokens_array = [];
  //     }

  //     // Check if the token already exists in the array
  //     const existingToken = this.tokens_array.find((tokenItem: any) => tokenItem.token === this.userToken);
  //     if (!existingToken) {
  //       this.tokens_array.push({ token: this.userToken, items: [{ product: {}, quantity: 0 }] });
  //       localStorage.setItem('tokens', JSON.stringify(this.tokens_array));
  //     }

  //     this.router.navigate(['features/home']);
  //     // if(res.user?.emailVerified == true){
  //     //   this.router.navigate([''])
  //     // } else {
  //     //   this.router.navigate(['/verify-email'])
  //     // }
  //   },
  //   err => {
  //     alert(err.message);
  //     this.router.navigate(['']);
  //   });
  // }
  register(email:string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
      alert('Registeration is successful')
      this.router.navigate([''])
      this.sendEmailForVerification(res.user)
    },
    err=>{
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }
  logout(){
    this.auth.signOut().then(()=>{
      // localStorage.removeItem('token')
      this.router.navigate([''])
    },
    err => {
      alert(err.message)
    })
  }
  forgotPassword(email: string){
    this.auth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email'])
    }, err => alert('Something went wrong.'))
  }

  sendEmailForVerification(user: any){
    user.sendEmailVarification().then((res: any) =>{
      this.router.navigate(['/verify-email'])
    }, (err: any) =>{
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  signInWithGoogle(){
    return this.auth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['/'])
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err =>{
      alert(err.message)
    })
  }
}
