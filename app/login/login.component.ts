import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {MainServiceService} from '../main-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lostPass(){

  }
  constructor(private route: RouterModule,private router:Router, private mainSer :MainServiceService) { }
  
  listUser = JSON.parse(localStorage.getItem('listUser'));
  userName :any;
  password :any;
  ngOnInit() {
  }
  login() {
    this.listUser.forEach(user => {
      if(this.userName == user.user && this.password == user.password){
        sessionStorage.setItem('loginTus', 'true');
        sessionStorage.setItem('userId', JSON.stringify(user.id));
        this.router.navigate(['/user']);
      }
    })
  }
}
