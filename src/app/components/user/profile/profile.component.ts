import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Userservice} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;

  constructor(private route: ActivatedRoute, private  userService: Userservice) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.userId = params['uid'];
    });

    this.user = this.userService.findUserById(this.userId);
  }

  userUpdate() {
    this.userService.updateUser(this.userId, this.user);
  }

}
