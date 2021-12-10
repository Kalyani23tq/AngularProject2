import { Component, OnInit } from '@angular/core';
import { EmpServService } from '../emp-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 employee:any[];
  constructor(private temp:EmpServService ) { 

  this.employee=this.temp.getEmp();

  }

  ngOnInit() {
  }

}
