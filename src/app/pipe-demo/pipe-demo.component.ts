import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  customName: string;
  companiesList = [
    {
      name: 'abc',
      creationDate: new Date(1, 2, 2020),
      status: 'Active',
      desc: 'IT company'
    },
    {
      name: 'xyz',
      creationDate: new Date(1, 2, 2020),
      status: 'InActive',
      desc: 'Staffing company'
    },
    {
      name: 'pqr',
      creationDate: new Date(1, 2, 2020),
      status: 'Active',
      desc: 'Call center'
    },
    {
      name: 'mno',
      creationDate: new Date(1, 2, 2020),
      status: 'InActive',
      desc: 'IT company 1'
    },
    {
      name: 'efg',
      creationDate: new Date(1, 2, 2020),
      status: 'Active',
      desc: 'IT company 4'
    }
  ];
  constructor() { }

  ngOnInit() {
   
  }
  createCompany() {
    this.companiesList.push({
      name: 'New Company',
      creationDate: new Date(1, 2, 2020),
      status: 'Active',
      desc: 'IT company 4'
    });
  }
}
