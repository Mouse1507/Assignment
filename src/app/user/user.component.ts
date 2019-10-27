import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../main-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private mainSer : MainServiceService) { }
  name :String;
  curUser:any;
  listUser:any;
  userId: any;
  ngOnInit() {
    this.listUser = this.mainSer.listUser;
    this.userId = localStorage.getItem('userId');
    this.listUser.forEach(user => {
      if(this.userId == user.id) {
        this.curUser = user;
        return;
      }
    });
  }

}
