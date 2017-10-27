import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Widgetservice} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';
import {Router} from '@angular/router';
@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  userId: string;
  webId: string;
  pageId: string;
  text:  string;
  width: string;
  url:  string;
  widgetId: string;
  widget: Widget;
  constructor( private route: ActivatedRoute, private router: Router, private widgetService: Widgetservice) { }

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
        'type': 'IMAGE',
        'text': this.text,
        'width': this.width,
        'url': this.url},
        this.widgetId)
        .subscribe((widgets: any) => {
          this.router.navigate(['/user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }, (error: any) => {});
    } else {
      this.widgetService.createWidget({
        'type': 'IMAGE',
        'text': this.text,
        'width': this.width,
        'url': this.url
      }, this.pageId)
        .subscribe((widgets: any) => {
          this.router.navigate(['/user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }, (error: any) => {});

    }
  }

  deleteWidget() {
    if (this.widgetId) {
      this.widgetService.deleteWidget(this.widgetId)
        .subscribe((widgets: any) => {
          this.router.navigate(['/user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }, (error: any) => {});
    }

  }

}
