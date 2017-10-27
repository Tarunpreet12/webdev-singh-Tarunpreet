import {Injectable} from '@angular/core';
import {Widget} from '../model/widget.model.client';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';


@Injectable()
export class Widgetservice {
  base = environment.baseUrl;

  constructor(private http: Http) {

  }

  createWidget(widget: any, pageId: string) {
    const url = this.base + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });

  }

  findWidgetById(widgetId: string) {
    const url = this.base + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  }

  findWidgetByPageId(pageId: string) {
    const url = this.base + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  deleteWidget(widgetId: string) {
    const url = this.base + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  updateWidget(widget: any, widgetId: string) {
    const url = this.base + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

}
