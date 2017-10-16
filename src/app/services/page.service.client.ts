import {Injectable} from '@angular/core';
import {Page} from '../model/page.model.client';

@Injectable()
export class Pageservice {
  pages: Page[] = [
    new Page('321', 'post1', '456', 'Lorem Ipsum'),
    new Page('432', 'Blog', '456', 'Lorem Ipsum'),
    new Page('543', 'post3', '456', 'Lorem Ipsum')
  ];


  createPage(page: any, websiteId: string) {
    const pageId: string = Math.random().toString();
    const pageAdded: Page = new page(pageId, page.name, websiteId,  page.description);
    this.pages.push(pageAdded);
  }

  updatePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x].name = page.name;
        this.pages[x].description = page.description;
        return this.pages[x];
      }
    }
  }
  deletePage(pageId: string) {
    const pagedeleted: Page = this.pages.find(function (page) {
      return page._id === pageId;
    });
    const index: number = this.pages.indexOf(pagedeleted);
    this.pages.splice(index, 1);
  }

  findPageByID(pageId: string) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }
  findPageByWebsiteId(websiteId: string) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }
  }

