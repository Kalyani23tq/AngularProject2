import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {
    isLogin:boolean=false;

  constructor() { }
  setLog(b:boolean)
  {
    this.isLogin=b;
  }
  getLog()
  {
    return this.isLogin;
  }
}
