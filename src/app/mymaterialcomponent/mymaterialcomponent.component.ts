import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymaterialcomponent',
  templateUrl: './mymaterialcomponent.component.html',
  styleUrls: ['./mymaterialcomponent.component.css']
})
export class MymaterialcomponentComponent implements OnInit {
foods:any[];
  constructor() { 

    this.foods= [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

  }

  ngOnInit() {
  }

}
