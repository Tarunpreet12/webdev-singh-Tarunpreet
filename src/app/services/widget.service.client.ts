import {Injectable} from '@angular/core';
import {Widget} from '../model/widget.model.client';

@Injectable()
export class Widgetservice {
  constructor() {
  }

  widgets: Widget  [] = [
    new Widget('456', 'HEADING', '321', 2, 'Gizmodo', '', ''),
    new Widget('234', 'HEADING', '321', 4, 'Lorem Ipsum', '', ''),
    new Widget('123', 'IMAGE', '321', '', '', '100', 'http://lorempixel.com/400/200/'),
    new Widget('345', 'HTML', '321', '', 'Html content from service', '', ''),
    new Widget('567', 'HEADING', '321', 4, 'Lorem Ipsum', '', ''),
    new Widget('678', 'YOUTUBE', '321', '', '', '100', 'https://www.youtube.com/embed/nhyc5ca3eVw'),
    new Widget('789', 'HTML', '321', '', 'another html contents', '', '')
  ];


  createWidget(widget: any, pageId: string) {
    const widgetId: String = Math.random().toString();

    if (widget.type === 'HEADING') {
      const w: Widget = new Widget(widgetId, widget.type, pageId, widget.size, widget.text, '', '');
      this.widgets.push(w);
    } else if (widget.type === 'IMAGE') {
      const w: Widget = new Widget(widgetId, widget.type, pageId, '', '', widget.width, widget.url);
      this.widgets.push(w);
    } else if (widget.type === 'HTML') {
      const w: Widget = new Widget(widgetId, widget.type, pageId, '', widget.text, '', '');
      this.widgets.push(w);
    } else if (widget.type === 'YOUTUBE') {
      const w: Widget = new Widget(widgetId, widget.type, pageId, '', '', widget.width, widget.url);
      this.widgets.push(w);
    }

  }

  findWidgetById(widgetId: string) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  findWidgetByPageId(pageId: string) {
    console.log('this is pageid' + pageId);
    return this.widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
  }



  deleteWidget(widgetId: string) {
    const wid: Widget = this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });

    const i: number = this.widgets.indexOf(wid);
    this.widgets.splice(i, 1);
  }



  updateWidget( widget: any, widgetId: string) {
    const update: Widget = this.widgets.find( function (widget1) {
          return widget1._id === widgetId;
    });
    if (widget.type === 'YOUTUBE') {
      update.width = widget.width;
      update.url = widget.url;

    } else if (widget.type === 'IMAGE') {
      update.text = widget.text;
      update.url = widget.url;
      update.width = widget.width;

    } else if (widget.type === 'HEADING') {
      update.text = widget.text;
      update.size = widget.size;
    }

  }
}
