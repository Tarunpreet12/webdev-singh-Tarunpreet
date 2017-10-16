import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Widgetservice} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  userId: string;
  widgetId: string;
  widget: Widget;
  text: string;
  size: string;
  webId: string;
  pageId: string;

  constructor(private route: ActivatedRoute, private widgetService: Widgetservice) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    if (this.widgetId) {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
      this.size =  this.widget.size;
      this.text = this.widget.text;
    }
  }

  createWidget() {
    if (this.widgetId) {
      this.widgetService.updateWidget({'type': 'HEADING', 'text': this.text, 'size': this.size}, this.widgetId);
    } else {
      this.widgetService.createWidget({'type': 'HEADING', 'text': this.text, 'size': this.size}, this.pageId);
    }
  }
  deleteWidget() {
    if (this.widgetId) {
      this.widgetService.deleteWidget(this.widgetId);
    }

  }

}
