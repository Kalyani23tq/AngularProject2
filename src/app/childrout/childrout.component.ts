import { Component, OnInit } from '@angular/core';
import { EmpServService } from '../emp-serv.service';

@Component({
  selector: 'app-childrout',
  templateUrl: './childrout.component.html',
  styleUrls: ['./childrout.component.css']
})
export class ChildroutComponent implements OnInit {
employee:any[];
  constructor(private mys:EmpServService) {
    this.employee=this.mys.getEmp();
   }

  ngOnInit() {
  }

}
