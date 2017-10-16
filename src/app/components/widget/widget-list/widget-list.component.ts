import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../model/widget.model.client';
import {Widgetservice} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  webId: string;
  pageId: string;
  widgets: Widget[] = [];
  url: string;
  constructor( private route: ActivatedRoute, private widgetService: Widgetservice, private domsan: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.widgets = this.widgetService.findWidgetByPageId(this.pageId);
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];

    });

  }

  SafeUrl(url: string) {
    return this.domsan.bypassSecurityTrustResourceUrl(url);
  }

}
