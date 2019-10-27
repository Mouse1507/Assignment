import { Component, OnInit } from '@angular/core';
import {MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mainSer : MainServiceService) { }

  ngOnInit() {
    // localStorage.setItem('listUser',JSON.stringify(this.mainSer.listUser));
  }

}
