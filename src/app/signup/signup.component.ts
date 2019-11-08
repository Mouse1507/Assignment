import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {}
  listUser = [];
  confirmPass = '';
  checkAgree = false;
  signupInfo = {
    id: 0,
    user: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    email: ''
  };
  ngOnInit() {
    this.listUser = JSON.parse(localStorage.getItem('listUser'));
    this.signupInfo.name = this.signupInfo.user;
    this.signupInfo.id = this.listUser.length + 1;
  }
  checkSignup() {
    if (this.checkAgree) {
      this.listUser.push(this.signupInfo);
      localStorage.setItem('listUser', JSON.stringify(this.listUser));
      this.router.navigate(['/login']);
    } else {
      alert('Bạn phải đồng ý với điều khoản');
    }

  }
  checkConfirmPass() {
    if (this.confirmPass == this.signupInfo.password) {
      alert('Mật khẩu trùng khớp');
    } else {
      alert('Không đúng mật khẩu');
    }
  }
}
