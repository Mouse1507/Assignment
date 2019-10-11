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
  toQuiz(index: Number) {
    this.curPage = index;
    this.changeActive('.quest-num');
  }
  changeActive(nameClass:string){
    let list = document.querySelectorAll(nameClass);
    list.forEach(element => {
      element.classList.remove('active');
    });
    list.forEach(element => {
      if(Number(element.innerHTML) == this.curPage) {
        element.classList.add('active');
        return;
      }
    });
    
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
  activeRadio(event: any) {
    document.querySelectorAll('.quest-ans').forEach(ans => {
      ans.classList.remove('active');
    })
    event.target.nextSibling.classList.add('active');
  }
  radioEvent(event:any){
    this.activeRadio(event);
  }
}
