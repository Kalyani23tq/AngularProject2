import { Component, OnInit } from '@angular/core';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private mys:LoginservService){}

  ngOnInit() {
  }

  changeG()
  {
    this.mys.setLog(true);
  }

}
