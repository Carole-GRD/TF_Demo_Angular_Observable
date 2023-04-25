import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsconnectedGuard {

  constructor(private _router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifier si notre utilisateur est connecté / S'il a les droits d'admin / Autre
    let isConnected = true;
    // let isConnected = false;
    if (isConnected) {
      return true
    }
    else {
      this._router.navigateByUrl('/login')
      return false;
    }

  }
  
}
