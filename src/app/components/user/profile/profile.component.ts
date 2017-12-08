import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Userservice} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable' ;
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: {};
  username: String;
  email: String;
  firstname: String;
  lastname: String;

  constructor(private route: ActivatedRoute , private router: Router, private  userService: Userservice, private sharedService: SharedService) {}

  ngOnInit() {


    this.route.params.subscribe(params => {
      this.user = this.sharedService.user || this.user;
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user: any ) => {
          this.router.navigate(['/user/', this.userId]);
        },
        (error: any) => {
        });
  }


  logout() {
    this.userService.logout()
      .subscribe((data: any) => {
        this.router.navigate(['/login']);
      });
  }

}
