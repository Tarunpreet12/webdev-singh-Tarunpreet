import { Component, OnInit , ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Userservice} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  password2: string;
  errorFlag: boolean;
  dupFlag: boolean;
  errorMsg = 'Password does not match !';
  dupUserMsg = 'User Already Exists';
  newuser= { };

  constructor(private router: Router, private userService: Userservice) {}

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.password2 = this.registerForm.value.password2;
    this.userService.findUserByUsername(this.username)
      .subscribe((user: any) => {
          if ( user) {
            this.dupFlag = true;
          }

        },
        (error: any) => {
          const newUser: User = new User('', '', '', '', '', '');
          newUser.username = this.username;
          newUser.password = this.password;
          this.userService.createUser(newUser)
            .subscribe((user: any) => {
                this.router.navigate(['/user/', user.id]);
              },
              (error1: any) => {
                console.error('Error creating profile');
              });
        }
      );

  }
  ngOnInit() {
  }

}
