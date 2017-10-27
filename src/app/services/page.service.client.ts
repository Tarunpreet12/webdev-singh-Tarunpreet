import {Injectable} from '@angular/core';
import {Page} from '../model/page.model.client';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Pageservice {

  base = environment.baseUrl;

  constructor(private http: Http) {

  }
  createPage(page: any, websiteId: string) {
    const url = this.base + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }

  updatePage(pageId: string, page: any) {
    const url = this.base + '/api/page/' +  pageId;
    return this.http.put(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }
  deletePage(pageId: string) {
    const url = this.base + '/api/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPageByID(pageId: string) {
    const url = this.base + '/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findPageByWebsiteId(websiteId: string) {
    const url = this.base + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  }

