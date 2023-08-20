import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';

@Injectable()
export class userGuard implements CanActivateChild
{
  router!: Router;
  // constructor( private router: Router) { }
  canActivateChild() {
    if("token" in localStorage){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}

