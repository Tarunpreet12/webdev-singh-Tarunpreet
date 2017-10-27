import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../model/page.model.client';
import {Pageservice} from '../../../services/page.service.client';
import {Router} from '@angular/router';



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
  constructor(private route: ActivatedRoute, private router: Router,  private pageService: Pageservice) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
       this.pageService.findPageByWebsiteId(this.websiteId)
        .subscribe((pages: any) => {
          this.pages  = pages;
        }, (error: any) => {});
     this.pageService.findPageByID(this.pageId)
       .subscribe((page: any ) => {
         this.page = page;
         this.name = this.page.name;
         this.description = this.page.description;
       }, (error: any) => {});
    });

  }

  updatePage() {
    this.pageService.updatePage( this.pageId, {'name': this.name, 'description': this.description})
      .subscribe((pages: any) => {
        this.router.navigate(['/user', this.userId, 'website',  this.websiteId, 'page']);
      }, ( error: any) => {});
  }
  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe((pages: any) => {
        this.router.navigate(['/user', this.userId, 'website' , this.websiteId, 'page']);
      }, ( error: any) => {});
  }

  createPage() {
    this.pageService.createPage( {'name': this.name, 'description': this.description}, this.websiteId)
      .subscribe((pages: any) => {}, ( error: any) => {});
  }
}
