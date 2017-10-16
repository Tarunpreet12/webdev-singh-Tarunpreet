import { Component, OnInit, ViewChild } from '@angular/core';
import {Userservice} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  username: string;
  password: string;
  verifyPassword: string;
  errorFlag: boolean;
  dupFlag: boolean;
  errorMsg = 'Password does not match';
  dupUserMsg = 'User Already Exists';
  user: User;
  constructor(private router: Router, private userService: Userservice) { }

  ngOnInit() {

  }

  register() {
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.verifyPassword = this.registrationForm.value.verifyPassword;
    const user: User = this.userService.findUserByUsername(this.username);
    if (user)  {
      this.dupFlag = true;
    } else if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
      this.errorMsg = 'password does not match';
    } else {
      const newUser: User = new User('', '', '', '', '', '');
      newUser.username = this.username;
      newUser.password = this.password;
      const id: String = this.userService.createuser(newUser);
      this.router.navigate(['/user', id]);

    }
  }

}
