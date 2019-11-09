import {
  Component,
  OnInit
} from '@angular/core';
import {
  RouterModule,
  Router
} from '@angular/router';
import {
  MainServiceService
} from '../main-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private route: RouterModule, private router: Router, private mainSer: MainServiceService) {}

  listUser =[];
  userName: string;
  password: string;
  isCorrectUser: boolean;
  lostUser: string;
  lostPass: string;
  lostRePass:string;
  ngOnInit() {
    this.isCorrectUser = false;
  }
  login() {
    this.listUser = JSON.parse(localStorage.getItem('listUser'));
    this.listUser.forEach(user => {
      if (this.userName == user.user && this.password == user.password) {
        this.isCorrectUser = true;
        sessionStorage.setItem('loginTus', 'true');
        sessionStorage.setItem('userId', JSON.stringify(user.id));
        this.router.navigate(['/user']);
      }
    })
    if (this.isCorrectUser == false) {
      document.getElementById('error-login').style.animation = 'fade 1s';
    }
    setTimeout(() => {
      document.getElementById('error-login').style.removeProperty('animation');
    },1000);
  }
  changePassword(acc,pass,repass) {
    var hasUser = false;
    var listUser = JSON.parse(localStorage.getItem('listUser'));
    listUser.forEach(user => {
      if(user.user == acc){
        if(pass == repass){
          user.password = pass;
          this.closeForgot();
          alert('Thay đổi thành công');
          this.router.navigate(['/login']);
        }else{
          alert('Xác nhận mật khẩu không trùng');
        }
        hasUser = true;
      }
    })
    if(hasUser == false){
      alert('Không có tên người dùng trong hệ thống');
    }
    localStorage.setItem('listUser',JSON.stringify(listUser));
  }
  closeForgot() {
    document.getElementById('forgot-pass').style.display = 'none';
  }
  openForgot() {
    document.getElementById('forgot-pass').style.display = 'block';
  }
}
