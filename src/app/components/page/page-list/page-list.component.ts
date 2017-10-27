import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Pageservice} from '../../../services/page.service.client';
import {Page} from '../../../model/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pages: Page[] = [];
  constructor(private route:  ActivatedRoute, private pageService: Pageservice ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
     this.pageService.findPageByWebsiteId(this.websiteId)
        .subscribe((pages: any) => {
            this.pages = pages;
          },
          (error: any) => {

          });
    });
  }

}
