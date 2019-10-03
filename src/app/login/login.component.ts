import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lostPass(){

  }
  constructor(private route: RouterModule) { }
  
  ngOnInit() {
  }

}
