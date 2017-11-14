import {Injectable} from '@angular/core';
import {Website} from '../model/website.model.client';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';


@Injectable()
export class WebsiteService {
  base = environment.baseUrl;
  constructor(private http: Http) {
  }


createWebsite(website: any, userId: string) {
  const url = this.base + '/api/user/' + userId + '/website';
  return this.http.post(url, website)
    .map((response: Response) => {
      return response.json();
    });
}

  findWebsiteById(websiteId: string) {
    const url = this.base + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

findWebsitesByUser(userId: String) {
   const url = this.base + '/api/user/' + userId + '/website';
  return this.http.get(url)
    .map((response: Response) => {
      return response.json();
    });
}

  updateWebsite(websiteId: string, website: any) {
    const url = this.base + '/api/website/' + websiteId;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }


  deleteWebsite(websiteId: String) {
    const url = this.base + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
