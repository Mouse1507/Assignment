import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private mainSer : MainServiceService) { }
  listMon :any;
  ngOnInit() {
    this.listMon = this.mainSer.listMon;
  }

}
