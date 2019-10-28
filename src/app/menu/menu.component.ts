import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private mainSer : MainServiceService) { }
  listMon : any;
  userId : any;
  loginTus :boolean;
  curUser:any;
  listUser:any;
  checkLogin = this.mainSer.checkLogin;
  switchModalBox = this.mainSer.switchModalBox;
  ngOnInit() {
    this.listUser = this.mainSer.listUser;
    this.listMon = this.mainSer.listMon;
    this.userId = sessionStorage.getItem('userId');
    this.loginTus = JSON.parse(sessionStorage.getItem('loginTus'));
    this.listUser.forEach(user => {
      if(this.userId == user.id) {
        this.curUser = user;
        return;
      }
    });
  }
  
  logOut() {
    sessionStorage.setItem('loginTus','false');
    sessionStorage.removeItem('listUserAns');
    sessionStorage.removeItem('userId');
  }
}
