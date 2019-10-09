import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  MainServiceService
} from '../main-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private mainSer: MainServiceService, private route: ActivatedRoute) {}
  curPage: Number = 1;
  countDown: Number = 30;
  listMon: any = [];
  listQuiz: any = []
  mon: any;
  quizMon: any;
  toQuiz(index: Number, event: any) {
    this.curPage = index;
    document.querySelectorAll('.quest-num').forEach(element => {
      element.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  listAns = [];
  eachAns:any;
  lessonId: any;
  ngOnInit() {
    this.listMon = this.mainSer.listMon;
    this.listQuiz = this.mainSer.listQuiz;;
    this.route.paramMap.subscribe(param => {
      this.lessonId = param.get("monId");
    });
    this.mon = this.listMon.find(m => m.Id === this.lessonId);
    this.quizMon = this.listQuiz.find(q => q.Id === this.lessonId);
  }
  radioEvent(event: any) {
    
  }
}
