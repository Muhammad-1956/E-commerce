import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) {

  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email , password).then((resolve: any)=>{
      const userToken = resolve.user._delegate.accessToken;

      localStorage.setItem('token', userToken);
      this.router.navigate([''])

      // if(res.user?.emailVerified == true){
      //   this.router.navigate([''])
      // } else {
      //   this.router.navigate(['/verify-email'])
      // }
    },
    err=>{
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }
  register(email:string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
      alert('Registeration is successful')
      this.router.navigate(['/login'])
      this.sendEmailForVerification(res.user)
    },
    err=>{
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }
  logout(){
    this.auth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
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

