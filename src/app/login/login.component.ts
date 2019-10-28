import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainServiceService} from '../main-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lostPass(){

  }
  constructor(private route: RouterModule, private mainSer :MainServiceService) { }
  
  listUser = this.mainSer.listUser;
  userName :any;
  password :any;
  ngOnInit() {
  }
  login() {
    this.listUser.forEach(user => {
      if(this.userName == user.user && this.password == user.password){
        sessionStorage.setItem('loginTus', 'true');
        sessionStorage.setItem('userId', JSON.stringify(user.id));
        window.location.href = '/user';
      }
    })
  }
}
