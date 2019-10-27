import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  showMap1:boolean;
  showMap2:boolean;
  ngOnInit() {
    this.showMap1 = true;
  }
  showMap(choice:boolean){
    this.showMap1 = choice;
    this.showMap2 = !choice;
  }
}
