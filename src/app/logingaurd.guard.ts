import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginservService } from './loginserv.service';

@Injectable({
  providedIn: 'root'
})
export class LogingaurdGuard implements CanActivate {
  constructor(private mys:LoginservService){}
  canActivate() {

    return this.mys.getLog();
  }
  
}
