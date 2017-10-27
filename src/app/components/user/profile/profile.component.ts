import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Userservice} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable' ;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;
  username: String;
  email: String;
  firstname: String;
  lastname: String;

  constructor(private route: ActivatedRoute , private router: Router, private  userService: Userservice) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.userId = params['uid'];
    });
    this.userService.findUserById(this.userId).subscribe(
      (data: any) => {
        this.username = data.username;
        this.email = data.email;
        this.firstname = data.firstName;
        this.lastname = data.lastName; },
      (error: any) => {
        return Observable.throw(error);
      }

    );
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user: any) => {
          this.router.navigate(['/user/', this.userId]);
        },
        (error: any) => {
        });
  }

}
