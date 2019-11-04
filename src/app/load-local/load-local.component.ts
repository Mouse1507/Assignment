import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-local',
  templateUrl: './load-local.component.html',
  styleUrls: ['./load-local.component.css']
})
export class LoadLocalComponent implements OnInit {

  constructor() { }
  listUser = [
    {
      id : 1,
      user : 'nam',
      password : '123456',
      name : 'nam',
      email : 'nam@gmail.com',
      address : '123nvt, q1 , hcm',
      phone : '0152587698',
    },
    {
      id : 2,
      user : 'luong',
      password : '123456',
      name : 'luong',
      email : 'luong@gmail.com',
      address : '453abc, tdh, hn',
      phone : '0258746951',
    }
  ]
  ngOnInit() {
    localStorage.setItem('listUser',JSON.stringify(this.listUser));
  }

}
