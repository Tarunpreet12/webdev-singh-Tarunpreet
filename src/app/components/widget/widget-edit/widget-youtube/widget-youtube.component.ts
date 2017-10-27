import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Widgetservice} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';
import {Router} from '@angular/router';
@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widgetId: string;
  widget: Widget;
  userId: string;
  webId: string;
  width: string;
  pageId: string;
  url: string;
  text: string;

  constructor(private route: ActivatedRoute, private router: Router, private widgetService: Widgetservice) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    if (this.widgetId) {
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget: any) => {
          this.widget = widget;
          this.width = this.widget.width;
          this.url = this.widget.url;
        }, (error: any) => {

        });
    }
  }


  createWidget() {
    if (this.widgetId) {
      this.widgetService.updateWidget({
        'type': 'YOUTUBE',
        'width': this.width,
        'url': this.url},
        this.widgetId)
        .subscribe((widgets: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }, (error: any)  => {});


    } else {
       this.widgetService.createWidget({'type': 'YOUTUBE', 'width': this.width, 'url': this.url}, this.pageId)
         .subscribe((widgets: any ) => {
           this.router.navigate(['/user', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
         }, (error: any) => {});
    }
  }

  deleteWidget() {
    if (this.widgetId) {
      this.widgetService.deleteWidget(this.widgetId)
        .subscribe((widgets: any  ) => {
          this.router.navigate(['/user', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }, (error: any) => {});
    }

  }

}
