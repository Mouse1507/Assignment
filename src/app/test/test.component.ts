import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private mainSer : MainServiceService) { }
  curPage : Number = 1;
  androidQuiz:any;
  countDown :Number = 20;
  toQuiz(index) {
    this.curPage = index;
    
  }
  resetCountDown(){
    
  }
  ngOnInit() {
    this.androidQuiz = this.mainSer.androidQuiz;
  }

}
