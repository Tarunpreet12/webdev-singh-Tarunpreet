import { Component, OnInit } from '@angular/core';
import {Widgetservice} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../model/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetId: string;
  widget: Widget;
  userId: string;
  webId: string;
  pageId: string;
  url: string;
  isavailable: boolean;

  constructor(private route: ActivatedRoute, private widgetService: Widgetservice) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget: any) => {
          this.widget = widget;
          this.isavailable = true;
        }, (error: any) => {});
    });
  }

}
