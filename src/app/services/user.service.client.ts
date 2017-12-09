

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user.model.client';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {SharedService} from './shared.service.client';

@Injectable()
 export class Userservice {
  domain = environment.baseUrl;
  options = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) { }

  baseUrl = environment.baseUrl;




  login(username: string, password: string) {
    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };

    return this.http.post(this.domain + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.domain + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }


  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.domain + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }



  register(username: string, password: string) {
    console.log('I am in register client');
    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };

    return this.http.post(this.domain + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  findUserById(userId: string): Observable <any> {

    const url = this.domain + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });

  }
  findUserByUsername(username: string) {
    const url = this.domain + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response ) => {

        return response.json();
      });
  }

  createUser(user: any ) {
    const url = this.domain + '/api/user/';
    return this.http.post(url, user)
      .map((response: Response ) => {

        return response.json();
      });
  }

  updateUser(userId: string, user: any) {
    const url = this.domain + '/api/user/' + userId;
    return  this.http.put(url, user)
      .map((response: Response ) => {

        return response.json();
      });


  }
}
