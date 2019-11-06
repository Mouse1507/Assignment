import {
  Component,
  OnInit
} from '@angular/core';
import {
  MainServiceService
} from '../main-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private mainSer: MainServiceService) {}
  name: String;
  curUser: any;
  listUser: any;
  userId: any;
  userField: any;
  editBut: any;
  isEdit: true;
  saveBut:any;
  ngOnInit() {
    this.listUser = JSON.parse(localStorage.getItem('listUser'));
    this.userId = sessionStorage.getItem('userId');
    this.listUser.forEach(user => {
      if (this.userId == user.id) {
        this.curUser = user;
        return;
      }
    });
    sessionStorage.setItem('curUser',JSON.stringify(this.curUser));
    this.userField = document.querySelectorAll('.user-info-field');
    this.editBut = document.querySelectorAll('.edit-but');
    this.userField.forEach(user => {
      user.setAttribute('disabled', 'disabled');
    });

    this.editBut.forEach(but => {
      but.nextElementSibling.style.display = 'none';
      but.addEventListener('click', function () {
        var field = but.parentElement.previousElementSibling;
        field.removeAttribute('disabled');
        field.focus();
        but.style.display = 'none';
        but.nextElementSibling.style.display = 'block';
      });
    });
    
    this.saveBut = document.querySelectorAll('.save-but');
    
    this.saveBut.forEach(but => {
      var user = this.curUser;
      but.addEventListener('click', function () {
        but.style.display = 'none';
        but.previousElementSibling.style.display = 'block';
        but.parentElement.previousElementSibling.setAttribute('disabled','disabled');
        var x = JSON.parse(localStorage.getItem('listUser'));
        x.splice(user.id-1,1,user);
        localStorage.setItem('listUser',JSON.stringify(x));
      })
    })

    
  }
}
