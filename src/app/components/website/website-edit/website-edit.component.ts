import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';


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


  constructor(private route: ActivatedRoute, private router: Router,  private websiteService: WebsiteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((websites: any ) => {
          this.websites = websites;
        }, (error: any) => {
        error.log('failed to update website'); });
      this.websiteService.findWebsiteById(this.websiteId)
        .subscribe((website: any ) => {
          this.website =  website;
          this.name = this.website.name;
          this.description = this.website.description;
        }, (error: any ) => {
        console.log('failed to update website')});

    });
  }

  updateWebsite() {
    this.websiteService.updateWebsite(this.websiteId,
{'name': this.name, 'description': this.description})
      .subscribe((data: any ) => {
        this.router.navigate(['/user', this.userId, 'website']);
      }, (error: any ) => {
      console.log('failed to update website');
    });
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe((data: any ) => {
        this.router.navigate(['/user', this.userId, 'website']);
      }, (error: any ) => {console.log('failed to delete website');
      });
  }

}
