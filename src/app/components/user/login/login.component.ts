import {Component, OnInit, ViewChild} from '@angular/core';
import {Userservice} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid Username or Password';

  constructor(private router: Router, private userService: Userservice) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log(this.password);
    const user: User = this.userService.finduserByCredentials(this.username, this.password);
    console.log(user);
    if (user) {
      this.router.navigate(['user', user._id]);
    }
    this.errorFlag = true;
  }
  ngOnInit() {

  }

}
