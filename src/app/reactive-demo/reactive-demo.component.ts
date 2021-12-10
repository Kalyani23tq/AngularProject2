import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {
  userform:FormGroup;
  countries=['USA','India','Italy'];

  constructor() { }

  ngOnInit() {
     this.userform=new FormGroup(
       {
            name:new FormControl("",[Validators.required,Validators.minLength(3)]),
          password:new FormControl("",[Validators.required,Validators.minLength(8)]),
          email:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
          gender:new FormControl(),
          country:new FormControl(),
          contactdetails:new FormGroup({
            land:new FormControl('',[Validators.required]),
            mobile: new FormControl()
           }),


       });




  }

  show()
  {
    console.log(this.userform.value);
  }

}
