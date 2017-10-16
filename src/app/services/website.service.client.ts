import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';


@Injectable()
export class WebsiteService {
  constructor() {
  }

  websites: Website[] = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
  ];

createWebsite(website: Website) {
  const wID: string = Math.random().toString();
  website._id = wID;
  this.websites.push(website);
  return website;
}

  findWebsiteById(websiteId: string) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

findWebsitesByUser(userId: String) {
  return this.websites.filter(function (website) {
    return website.developerId === userId;
  });
}

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].description = website.description;
        return this.websites[x];
      }
    }
  }


  deleteWebsite(websiteId: String) {
    const web: Website = this.websites.find(function (website)
    {
      return website._id === websiteId;
    });
    const index: number = this.websites.indexOf(web);
    this.websites.splice(index, 1);
  }
}
