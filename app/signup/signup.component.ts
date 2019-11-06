import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }
  listUser = [];
  confirmPass = '';
  checkAgree = false;
  signupInfo = {
    id : 0,
    user : '',
    password : '',
    name : '',
    phone : '',
    address : '',
    email : ''
  };
  ngOnInit() {
    this.listUser = JSON.parse(localStorage.getItem('listUser'));
    this.signupInfo.name = this.signupInfo.user;
    this.signupInfo.id = this.listUser.length+1;
  }
  checkSignup() {
    this.listUser.push(this.signupInfo);
    localStorage.setItem('listUser', JSON.stringify(this.listUser));
    this.router.navigate(['/login']);
  }
  checkConfirmPass() {
    if(this.confirmPass == this.signupInfo.password) {
      alert('khop mat khau');
    }else {
      alert ('khong khop mat khau');
    }
  }
}