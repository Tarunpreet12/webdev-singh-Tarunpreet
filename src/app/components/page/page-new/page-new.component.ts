import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pageservice} from '../../../services/page.service.client';
import {Page} from '../../../model/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: string;
  websiteId: string;
  name: string;
  description: string;
  pages: Page[];
  constructor(private route: ActivatedRoute, private pageService: Pageservice) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    });
  }

  createPage() {
    this.pageService.createPage( {'name': this.name, 'description': this.description}, this.websiteId);
  }

}
