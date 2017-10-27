import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
userId: string;
name: string;
description: string;
websites: Website[]= [];
  constructor(private route: ActivatedRoute, private router: Router, private websiteService: WebsiteService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
   this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((websites: any) => {
          this.websites = websites;
        }, (error: any) => {
        error.log('failed to delete website');
   });
    });
  }

  addWebsite() {
    if (this.name) {
      this.websiteService.createWebsite(new Website(' ', this.name, this.userId, this.description), this.userId)
        .subscribe((data: any) => {
          this.router.navigate(['/user', this.userId, 'website']);

        }, (error: any) => {
        error.log('failed to add website');
        });
    }
  }

}
