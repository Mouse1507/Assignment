import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
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

  constructor(private mainSer: MainServiceService, private route: ActivatedRoute, private router: Router) {}
  curPage: number = 1;
  countDown: number = 30;
  listMon: any = [];
  listQuiz: any = []
  mon: any;
  quizMon: any;
  isEndTest: boolean;
  toQuiz(index: number) {
    this.curPage = index;
    this.activeQuestNum('.quest-num');
  }
  //Active quest number
  activeQuestNum(nameClass: string) {
    let list = document.querySelectorAll(nameClass);
    list.forEach(element => {
      element.classList.remove('active');
    });
    list.forEach(element => {
      if (Number(element.innerHTML) == this.curPage) {
        element.classList.add('active');
        return;
      }
    });

  }
  activeAnsNum() {
    var listUserAns = JSON.parse(sessionStorage.getItem('listUserAns'));
    var questNum = document.querySelectorAll('.quest-num');
    if (listUserAns != null) {
      listUserAns.forEach(user => {
        questNum.forEach(quest => {
          var questId = quest.getAttribute('id');
          if (questId == user.Id) {
            quest.classList.add('answer');
          }
        })
      })
    }
  }

  lessonId: any;
  trung = false;
  idmon: any;
  loginTus: boolean;
  curUser: any;
  ngOnInit() {
    this.loginTus = JSON.parse(sessionStorage.getItem('loginTus'));
    this.curUser = JSON.parse(sessionStorage.getItem('curUser'));
    this.listMon = this.mainSer.listMon;
    this.listQuiz = this.mainSer.listQuiz;;
    this.lessonId = sessionStorage.getItem('lessionId');
    this.mon = this.listMon.find(m => m.Id === this.lessonId);
    this.quizMon = this.listQuiz.find(q => q.Id === this.lessonId);
    sessionStorage.setItem('listWebAns', JSON.stringify(this.quizMon.quiz));
    this.toQuiz(this.curPage);
    setInterval(this.showUserAns, 100);
    setInterval(this.activeAnsNum, 100);
    this.isEndTest = JSON.parse(sessionStorage.getItem('isEndTest'));
  }
  activeRadio(quizsId, ansId, event) {
    let checkHave = false;
    document.querySelectorAll('.quest-ans').forEach(ans => {
      ans.classList.remove('active');
    })
    event.target.nextSibling.classList.add('active');
    if (this.mainSer.listAns.length == 0) {
      this.mainSer.listAns.push({
        Id: quizsId,
        ansId: ansId
      });
    } else {
      this.mainSer.listAns.forEach(ele => {
        if (quizsId == ele.Id) {
          ele.ansId = ansId;
          checkHave = true;
          return;
        } else {
          checkHave = false;
        }
      })
      if (checkHave == false) {
        this.mainSer.listAns.push({
          Id: quizsId,
          ansId: ansId
        });
      }
    }
    // sessionStorage.removeItem('listAns');
    sessionStorage.setItem('listUserAns', JSON.stringify(this.mainSer.listAns));
  }
  // check question
  checkEndTest() {
    sessionStorage.setItem('isEndTest', JSON.stringify(true));
  }
  showAnsPerPage() {
    if (JSON.parse(sessionStorage.getItem('isEndTest'))) {
      setTimeout(() => {
        this.showWebAns();
      }, 100);
    }
  }
  showWebAns() {
    var questList = document.querySelectorAll('.quest-choose');
    let webAns = JSON.parse(sessionStorage.getItem('listWebAns'));
    questList.forEach(quest => {
      quest.setAttribute('disabled', 'true');
      var questId = quest.getAttribute('name');
      var ansId = quest.getAttribute('value');
      webAns.forEach(ans => {
        if (questId == ans.Id && ansId == ans.AnswerId) {
          quest.nextElementSibling.classList.add('answer');
          quest.setAttribute('checked', 'true');
        }
      })
    });
  }
  showUserAns() {
    var userAns = JSON.parse(sessionStorage.getItem('listUserAns'));
    var questList = document.querySelectorAll('.quest-choose');
    if (userAns != null) {
      questList.forEach(quest => {
        var questId = quest.getAttribute('name');
        var ansId = quest.getAttribute('value');
        userAns.forEach(user => {
          if (user.Id == questId && user.ansId == ansId) {
            quest.nextElementSibling.classList.add('active');
            quest.setAttribute('checked', 'true');
          }
        })
      })
    }
  }
  checkLogin(event, block, Id) {
    this.mainSer.checkLogin(event, block, Id);
  }
  changeLesson(id) {
    if (sessionStorage.getItem('lessonId') != id) {
      this.lessonId = id;
      this.mon = this.listMon.find(m => m.Id === this.lessonId);
      this.quizMon = this.listQuiz.find(q => q.Id === this.lessonId);
      sessionStorage.setItem('listWebAns', JSON.stringify(this.quizMon.quiz));
      this.toQuiz(this.curPage);
      sessionStorage.setItem('isEndTest', JSON.stringify(false));
      this.isEndTest = JSON.parse(sessionStorage.getItem('isEndTest'));
      setTimeout(() => {
        var questList = document.querySelectorAll('.quest-choose');
        var webAns = JSON.parse(sessionStorage.getItem('listWebAns'));
        questList.forEach(quest => {
          quest.removeAttribute('disabled');
        })
      }, 1000);
      sessionStorage.removeItem('listUserAns');
    }
  }
  logOut() {
    sessionStorage.setItem('loginTus', 'false');
    sessionStorage.removeItem('listUserAns');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('curUser');

  }
}
