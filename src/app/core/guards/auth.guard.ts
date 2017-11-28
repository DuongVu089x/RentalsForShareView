import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SystemConstants } from '../../core/commons/system.constants';
import { UrlConstants } from '../../core/commons/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
        if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
            return true;
        }
        this.router.navigate([UrlConstants.LOGIN], {
            queryParams: {
                returnUrl: routerState.url
            }
        });
        return false;
    }
}
