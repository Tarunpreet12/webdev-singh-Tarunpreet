import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../model/page.model.client';
import {Pageservice} from '../../../services/page.service.client';



@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: string;
  userId: string;
  websiteId: string;
  name: string;
  description: string;
  page: Page;
  pages: Page[];
  constructor(private route: ActivatedRoute, private pageService: Pageservice) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pages  = this.pageService.findPageByWebsiteId(this.websiteId);
      this.page = this.pageService.findPageByID(this.pageId);
      this.name = this.page.name;
      this.description = this.page.description;
    });

  }

  updatePage() {
    this.pageService.updatePage( this.pageId, {'name': this.name, 'description': this.description});
  }
  deletePage() {
    this.pageService.deletePage(this.pageId);
  }

  createPage() {
    this.pageService.createPage( {'name': this.name, 'description': this.description}, this.websiteId);
  }
}
