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
  listMon: any = [];
  listQuiz: any = []
  mon: any;
  quizMon: any;
  isEndTest: boolean;
  timeOut: any;
  lessonId: any;
  idmon: any;
  loginTus: boolean;
  curUser: any;
  x: any;
  countIsAnswer = 0;
  ngOnInit() {
    this.loginTus = JSON.parse(sessionStorage.getItem('loginTus'));
    this.curUser = JSON.parse(sessionStorage.getItem('curUser'));
    this.listMon = this.mainSer.listMon;
    this.listQuiz = this.mainSer.listQuiz;;
    this.lessonId = sessionStorage.getItem('lessonId');
    this.mon = this.listMon.find(m => m.Id === this.lessonId);
    this.quizMon = this.listQuiz.find(q => q.Id === this.lessonId);
    sessionStorage.setItem('listWebAns', JSON.stringify(this.quizMon.quiz));
    sessionStorage.setItem('isEndTest', JSON.stringify(false));
    sessionStorage.setItem('isTimeOut', JSON.stringify(false));
    //countdown
    clearInterval(this.x);
    setTimeout(this.setCountDown, 200);
    //end countdown
    this.toQuiz(this.curPage);
    setInterval(this.showUserAns, 100);
    setInterval(this.activeAnsNum, 100);
    this.isEndTest = JSON.parse(sessionStorage.getItem('isEndTest'));
    sessionStorage.setItem('listUserAns', JSON.stringify(this.mainSer.listAns));
  }
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



  activeRadio(quizsId, ansId, event) {
    let checkHave = false;
    // active user answer color
    document.querySelectorAll('.quest-ans').forEach(ans => {
      ans.classList.remove('active');
    })
    event.target.nextSibling.classList.add('active');
    //add user ans to list
    this.mainSer.listAns = JSON.parse(sessionStorage.getItem('listUserAns'));
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
    this.countIsAnswer = this.mainSer.listAns.length;
  }
  // check question
  checkEndTest() {
    sessionStorage.setItem('isEndTest', JSON.stringify(true));
    setTimeout(() => {
      this.showWebAns();
    }, 100);
    document.getElementById('mark-alert').style.transform = 'translateX(200%)';
  }
  closeBox() {
    document.getElementById('mark-alert').style.removeProperty('transform');
  }

  showAnsPerPage() {
    if (JSON.parse(sessionStorage.getItem('isEndTest'))) {
      setTimeout(() => {
        this.showWebAns();
      }, 100);
    }
  }
  //show answer when end test
  showWebAns() {
    var questList = document.querySelectorAll('.quest-choose');
    var webAns = JSON.parse(sessionStorage.getItem('listWebAns'));
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
  //login test menu
  checkLogin(event, block, Id) {
    this.mainSer.checkLogin(event, block, Id);
  }
  //test menu change lesson
  changeLesson(id: string) {
    if (this.lessonId != id) {
      //countdown
      clearInterval(this.x);
      setTimeout(this.setCountDown, 200);

      this.lessonId = id;
      this.mon = this.listMon.find(m => m.Id === this.lessonId);
      this.quizMon = this.listQuiz.find(q => q.Id === this.lessonId);
      sessionStorage.setItem('listWebAns', JSON.stringify(this.quizMon.quiz));
      this.toQuiz(this.curPage);
      sessionStorage.setItem('isEndTest', JSON.stringify(false));
      this.isEndTest = JSON.parse(sessionStorage.getItem('isEndTest'));
      sessionStorage.setItem('listUserAns', '[]');
      sessionStorage.setItem('isTimeOut', JSON.stringify(false));

      //remove disabled choose
      setTimeout(() => {
        var questList = document.querySelectorAll('.quest-choose');
        questList.forEach(quest => {
          quest.removeAttribute('disabled');
        })
      }, 500);

    } else {
      alert('Bạn đang ở môn ' + this.mon.Name + ' rồi');
    }
  }
  logOut() {
    sessionStorage.setItem('loginTus', 'false');
    sessionStorage.removeItem('listUserAns');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('curUser');
  }
  //calculate grade
  testMark() {
    var mark = 0;
    var userAns = JSON.parse(sessionStorage.getItem('listUserAns'));
    var webAns = JSON.parse(sessionStorage.getItem('listWebAns'));
    if (userAns.length != 0 && userAns != undefined && userAns != null) {
      userAns.forEach(uAns => {
        webAns.forEach(wAns => {
          if (uAns.Id == wAns.Id && uAns.ansId == wAns.AnswerId) {
            mark += wAns.Marks;
          }
        })
      })
    }
    return mark;
  }

  setCountDown() {
    var distance = 60;
    this.x = setInterval(function () {
      document.getElementById('countDown').innerHTML = '';
      var hour = Math.floor(distance / 3600);
      var minute = Math.floor((distance - hour * 3600) / 60);
      var second = Math.floor(distance % 60);
      document.getElementById('countDown').innerHTML += ((hour < 10) ? '0' + hour : hour) + ':';
      document.getElementById('countDown').innerHTML += ((minute < 10) ? '0' + minute : minute) + ':';
      document.getElementById('countDown').innerHTML += (second < 10) ? '0' + second : second;
      distance = distance - 1;
      if (distance < 0) {
        clearInterval(this.x);
        alert('Bấm nút kết thúc để xem đáp án');
        sessionStorage.setItem('isTimeOut', JSON.stringify(true));
        var questList = document.querySelectorAll('.quest-choose');
        questList.forEach(quest => {
          quest.setAttribute('disabled', 'true');
        });
      }
    }, 1000);
  }

  disabledRadio() {
    setTimeout(() => {
      if (JSON.parse(sessionStorage.getItem('isTimeOut'))) {
        var questList = document.querySelectorAll('.quest-choose');
        questList.forEach(quest => {
          quest.setAttribute('disabled', 'true');
        });
      }
    }, 100);
  }
}
