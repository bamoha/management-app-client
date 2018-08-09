import {Injectable} from "@angular/core";
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authService : AuthService, private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let url : string = state.url;
    return this.verifyLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state:RouterStateSnapshot ):boolean {
    let url : string = state.url;
    return this.verifyLogin(url);
  }


  verifyLogin(url : string):boolean{
    if(this.authService.logInStatus()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
