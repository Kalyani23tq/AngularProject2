import { Component, OnInit } from '@angular/core';
import { EmpServService } from '../emp-serv.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-emprout',
  templateUrl: './emprout.component.html',
  styleUrls: ['./emprout.component.css']
})
export class EmproutComponent implements OnInit {
 employee:any[];
 emplist:any;
  constructor( private  mys:EmpServService,private _activeRoute:ActivatedRoute,private r:Router) { }

  ngOnInit() {
   let empcode=this._activeRoute.snapshot.params['code'];
   this.employee=this.mys.getEmp();
   for(let i=0;i<this.employee.length;i++)
   {
      if(empcode==this.employee[i].code)
      {
        this.emplist=this.employee[i];
      }

   }


  }
  onBack()
  {
    this.r.navigate(['home']);
  }

}
