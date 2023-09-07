import { CanActivateChildFn, Router } from '@angular/router';

export const controlsGuard: CanActivateChildFn = (childRoute, state) => {

  if ("token" in localStorage) {
    return true;
  } else {
    // Inject the Router service into the guard
    const router = new Router();
    router.navigate(['']);
    return false;
  }
};
