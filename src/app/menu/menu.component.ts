import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import {Router} from '@angular/router';
import { Capabilities } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private mainSer : MainServiceService, private router:Router) { }
  listMon : any;
  userId : any;
  loginTus :boolean;
  curUser:any;
  listUser:any;
  listQuiz:any;
  checkLogin = this.mainSer.checkLogin;
  switchModalBox = this.mainSer.switchModalBox;
  defauUser = [{
    id: 1,
    user: 'luong',
    password: '123456',
    name: 'luong',
    phone: '123456234',
    address : '123 NVT, Q12',
    email: 'vluong514@gmail.com'
  },
  {
    id: 2,
    user: 'nam',
    password: '123456',
    name: 'nam',
    phone: '123456234',
    address : '456 SJW, Q23, HCM',
    email: 'vluong514@gmail.com'
  }
]
  ngOnInit() {
    sessionStorage.setItem('isEndTest',JSON.stringify(false ));
    if(localStorage.length == 0) {
      localStorage.setItem('listUser',JSON.stringify(this.defauUser));
    }
    this.listUser = JSON.parse(localStorage.getItem('listUser'));
    this.listMon = this.mainSer.listMon;
    this.listQuiz = this.mainSer.listQuiz;
    this.userId = sessionStorage.getItem('userId');
    this.loginTus = JSON.parse(sessionStorage.getItem('loginTus'));
    this.listUser.forEach(user => {
      if(this.userId == user.id) { 
        this.curUser = user;
        return;
      }
    });
    if(JSON.parse(sessionStorage.getItem('loginTus')) && this.curUser.name == '') {
      this.curUser.name = this.curUser.user;
    };
  }
  
  logOut() {
    sessionStorage.setItem('loginTus','false');
    sessionStorage.removeItem('listUserAns');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('curUser');

  }
}
