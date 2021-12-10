import { Injectable } from '@angular/core';
import {IEmp} from './iemp';
@Injectable({
  providedIn: 'root'
})
export class EmpServService {

  getEmp():IEmp[]{
     return[ {code:'c101',name:'Amit',sal:25000},
     {code:'c102',name:'Neha',sal:35000},

     ]

  }

  constructor() { }
}
