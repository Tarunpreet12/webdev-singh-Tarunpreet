import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';


@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
userId: string;
websiteId: string;
name: string;
websites: Website[]= [];
website: Website;
description: string;


  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
      this.website = this.websiteService.findWebsiteById(this.websiteId);
    });
  }

  updateWebsite() {
    this.websiteService.updateWebsite(this.websiteId, {'name': this.name, 'description': this.description});
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
  }

}
