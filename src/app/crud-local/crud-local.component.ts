import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {
 model:any={};
 model2:any={};
 myvalue:any;
 employee:any[]=[];
  constructor() { }

  ngOnInit() {
    this.employee=JSON.parse(localStorage.getItem("info"));
  }
  addEmployee()
  {
    let emp=JSON.parse(localStorage.getItem("info"));
    if(emp==null)
    {
      emp=[];
    }
    emp.push(this.model);
    localStorage.setItem("info",JSON.stringify(emp));
    this.employee=JSON.parse(localStorage.getItem("info"));
    this.model={};
  }
  delete(i)
  {
     this.employee.splice(i,1);
     localStorage.setItem("info",JSON.stringify(this.employee));
  }


  edit(i)
 {
   this.model2.name=this.employee[i].name;
   this.model2.position=this.employee[i].position;
   this.myvalue=i;
 }
 updateEmployee()
 {
   let k=this.myvalue;
   for(let i=0;i<this.employee.length;i++)
   {
       if(i==k)
       {
           this.employee[i]=this.model2;
           localStorage.setItem("info",JSON.stringify(this.employee));
           this.employee=JSON.parse(localStorage.getItem("info"));
           this.model2={}; 
       }
   }

 }

}
