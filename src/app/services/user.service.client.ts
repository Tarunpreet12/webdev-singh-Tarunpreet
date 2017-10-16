

import { Injectable } from '@angular/core';
import {User} from '../model/user.model.client';

@Injectable()
 export class Userservice {

   constructor() { }

   users: User[] = [
     new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
     new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
     new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
     new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@gmail.com')
  ];

   createuser(user: User) {
     user._id = Math.random().toString();
     this.users.push(user);
     return user._id;
   }

   findUserById(userid: String) {
     for (let i = 0; i < this.users.length; i++) {
       if ( userid === this.users[i]._id) {
         return this.users[i];
       }
     }

   }
   findUserByUsername(username: String) {
     for (let i = 0; i < this.users.length ; i++) {
       if (this.users[i].username === username) {
         return this.users[i];
       }
     }
   }
   finduserByCredentials(username: String , password: String) {
     for (let i = 0; i < this.users.length; i++) {
       if (this.users[i].username === username && this.users[i].password === password) {
         return this.users[i];

       }
     }
   }

  updateUser(userId, user) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        this.users[i].username = user.userName;
        this.users[i].email = user.email;
        return this.users[i];
      }
    }
  }

   // deleteUser(userid: String, user: User){
   //
   // }

}
