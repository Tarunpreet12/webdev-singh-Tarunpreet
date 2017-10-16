webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* Userservice */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* Pageservice */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* Widgetservice */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/**
 * Created by sesha on 7/26/17.
 */


















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_9__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n  <h4>\r\n    <a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/\">Github repository </a>\r\n  </h4>\r\n  <h4>\r\n    <a href=\"https://docs.google.com/document/d/1rxZnIRpwCzqQVJwMm7HLfKHvXiI_GLpcfBjm0ymmWXI/edit#heading=h.zcu7frcqjmoq\">Assignment 1 </a>\r\n  </h4>\r\n  <h4>\r\n    <a href=\"../../../assets/index.html\">Assignment 2</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',websiteId,'page']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\n    </a>\n    <a class=\"navbar-brand\">Edit Page</a>\n    <a class=\" navbar-brand pull-right\" (click)=\"updatePage() \"[routerLink]=\"['/user',userId,'website',websiteId,'page']\" >\n      <span class = \"glyphicon glyphicon-ok black\" ></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <label for=\"name\">Name</label>\n    <input [(ngModel)]=\"name\"\n      placeholder=\"Blog post\"\n      type = \"text\"\n      id = \"name\"\n      class=\" form-control\"/>\n    <label for=\"description\">Title</label>\n    <input [(ngModel)]= \"description\"\n           name=\"description\"\n      placeholder=\"Page Title\"\n      type = \"text\"\n      id = \"description\"\n      class=\" form-control\"/>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n    <a (click)=\"deletePage()\"  [routerLink]=\"['/user',userId,'website',websiteId,'page']\" class=\"btn btn-danger btn-block\">Delete</a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(route, pageService) {
        this.route = route;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
            _this.page = _this.pageService.findPageByID(_this.pageId);
            _this.name = _this.page.name;
            _this.description = _this.page.description;
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        this.pageService.updatePage(this.pageId, { 'name': this.name, 'description': this.description });
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
    };
    PageEditComponent.prototype.createPage = function () {
        this.pageService.createPage({ 'name': this.name, 'description': this.description }, this.websiteId);
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */]) === "function" && _b || Object])
], PageEditComponent);

var _a, _b;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\" ></span>\n    </a>\n    <a class=\"navbar-brand\">Page list</a>\n    <a class=\" navbar-brand pull-right\" [routerLink]=\"['/user',userId,'website',websiteId,'page','new']\" >\n      <span class = \"glyphicon glyphicon-plus black\"></span>\n    </a>\n\n  </nav>\n  <div class=\"container-fluid content-top-margin\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let p of pages\" >\n        <a [routerLink]=\"['/user',userId,'website', websiteId, 'page', p._id,'widget']\"><b>{{p.name}}</b> </a>\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',p._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(route, pageService) {
        this.route = route;
        this.pageService = pageService;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\"[routerLink]=\"['/user',userId,'website',websiteId,'page']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\n    </a>\n    <a class=\"navbar-brand\">New Page</a>\n    <a class=\" navbar-brand pull-right\" (click)=\"createPage()\" [routerLink]=\"['/user',userId,'website',websiteId,'page']\">\n      <span class = \"glyphicon glyphicon-ok black\"></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <label for=\"name\">Name</label>\n    <input [(ngModel)]='name'\n           name=\"name\"\n      placeholder=\"Page Name\"\n      type = \"text\"\n      id = \"name\"\n      class=\" form-control\"/>\n\n    <label for=\"description\">Title</label>\n    <input [(ngModel)]='description'\n           name=\"description\"\n      placeholder=\"Page Title\"\n      type = \"text\"\n      id = \"description\"\n      class=\" form-control\"/>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page']\" class=\"btn btn-danger btn-block\">Cancel</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = (function () {
    function PageNewComponent(route, pageService) {
        this.route = route;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
        });
    };
    PageNewComponent.prototype.createPage = function () {
        this.pageService.createPage({ 'name': this.name, 'description': this.description }, this.websiteId);
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */]) === "function" && _b || Object])
], PageNewComponent);

var _a, _b;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n<form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n  <input\n         placeholder=\"username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control\"\n         ngModel\n         required\n         #username= \"ngModel\"/>\n  <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n   </span>\n\n\n  <input\n         placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control\"\n         ngModel\n         required\n         #password = \"ngModel\"/>\n  <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter Password!\n   </span>\n\n  <button class=\"btn btn-primary btn-block\"\n     type=\"submit\"\n     [disabled]= \"!f.valid\">Login</button>\n\n  <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n</form>\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid Username or Password';
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.finduserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['user', user._id]);
        }
        this.errorFlag = true;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"userUpdate()\" [routerLink]=\"['user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"user.email\"\n             name=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"alice.wonderland@unicorn.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             name=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             name=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Wonderland\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user',userId,'website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     [routerLink]= \"['/login']\"> Logout </a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['user',userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
    };
    ProfileComponent.prototype.userUpdate = function () {
        this.userService.updateUser(this.userId, this.user);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"dupFlag\"\n       class=\"alert alert-danger\">\n    {{dupUserMsg}}\n  </div>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n  <input placeholder=\"username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control\"\n         ngModel\n         required\n         #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n   </span>\n\n\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control\"\n         ngModel\n         required\n         #password= \"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n   </span>\n\n\n  <input placeholder=\"verify password\"\n         name=\"verifyPassword\"\n         type=\"password\"\n         class=\"form-control\"\n  ngModel\n  required\n  #verifyPassword= \"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n   </span>\n\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n    <a class=\"btn btn-danger btn-block\"\n       routerLink=\"/login\" >Cancel</a>\n  </form>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_model_client__ = __webpack_require__("../../../../../src/app/model/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Password does not match';
        this.dupUserMsg = 'User Already Exists';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registrationForm.value.username;
        this.password = this.registrationForm.value.password;
        this.verifyPassword = this.registrationForm.value.verifyPassword;
        var user = this.userService.findUserByUsername(this.username);
        if (user) {
            this.dupFlag = true;
        }
        else if (this.password !== this.verifyPassword) {
            this.errorFlag = true;
            this.errorMsg = 'password does not match';
        }
        else {
            var newUser = new __WEBPACK_IMPORTED_MODULE_4__model_user_model_client__["a" /* User */]('', '', '', '', '', '');
            newUser.username = this.username;
            newUser.password = this.password;
            var id = this.userService.createuser(newUser);
            this.router.navigate(['/user', id]);
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- top navbar icons -->\n<nav class=\"navbar navbar-default navbar-fixed-top bg-blue-color\" >\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-1\">\n\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left white\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 hidden-xs\">\n\n\n      <div class=\"navbar-header pull-left \">\n        <a class=\"navbar-brand white\" [routerLink]=\"['/user',userId,'website']\">\n          <div class=\"white\"> <b> Website Edit </b></div>\n        </a>\n      </div>\n\n\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user',userId,'website','new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus white\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <div class=\"white\">\n            <b>Edit Website</b>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateWebsite()\" [routerLink]=\"['/user',userId,'website']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok white\"></span>\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<!--content Body -->\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><a href=\"../page/page-list.html\"><b>facebook</b></a>\n        <a href=\"website-edit.html\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n\n      <li class=\"list-group-item\"><a href=\"../page/page-list.html\"><b>Twitter</b></a>\n        <a href=\"website-edit.html\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n\n      <li class=\"list-group-item\"><a href=\"../page/page-list.html\"><b>Youtube</b></a>\n        <a href=\"website-edit.html\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Right Pane form -->\n  <div class=\"col-sm-8\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]='name'\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Website Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea\n        [(ngModel)]='description'\n        name=\"description\"\n        id=\"description\"\n        class=\"form-control\"\n        placeholder=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\" rows=\"5\">\n      </textarea>\n    </div>\n\n    <div class=\"form-group\">\n      <<a class=\"btn btn-danger btn-block \"\n          (click)=\"deleteWebsite()\"\n          [routerLink]=\"['/user', userId, 'website']\">Delete</a>\n    </div>\n  </div>\n\n</div>\n<<nav class=\"navbar navbar-default navbar-fixed-bottom bg-blue-color\">\n  <a [routerLink]=\"['/user', userId]\"\n     class=\"pull-right\">\n    <span class=\"glyphicon glyphicon-user white\"></span>\n  </a>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            _this.website = _this.websiteService.findWebsiteById(_this.websiteId);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        this.websiteService.updateWebsite(this.websiteId, { 'name': this.name, 'description': this.description });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object])
], WebsiteEditComponent);

var _a, _b;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--plus sign-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website','new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n\n    <!--back sign-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Websites</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let website of websites\">\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\n          {{website.name}}\n        </a>\n        <a [routerLink]=\"['/user', userId, 'website', website._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </div>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- top navbar icons -->\n<nav class=\"navbar navbar-default navbar-fixed-top bg-blue-color\" >\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-1\">\n\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user',userId,'website']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left white\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 hidden-xs\">\n\n\n      <div class=\"navbar-header pull-left \">\n        <a class=\"navbar-brand white\" [routerLink]=\"['/user',userId,'website']\">\n          <div class=\"white\"> <b> Websites </b></div>\n        </a>\n      </div>\n\n\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user/',userId,'website','new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus white\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <div class=\"white\">\n            <b>New Website</b>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"addWebsite()\" [routerLink]=\"['/user/',userId,'website']\"  class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok white\"></span>\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<!--content Body -->\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\n            {{website.name}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', website._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <div class=\"form-group\">\n      <label for=\"input\">Name</label>\n      <input [(ngModel)]='name'\n             type=\"text\"\n             class=\"form-control\"\n             id=\"input\"\n             placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea  [(ngModel)]='description'\n                 class=\"form-control\"\n                 placeholder=\"Description\"\n                 rows=\"5\"\n                 id=\"description\">\n\n      </textarea>\n    </div>\n\n  </div>\n\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom bg-blue-color\">\n  <a [routerLink]=\"['/user', userId]\" class=\"pull-right\">\n    <span class=\"glyphicon-user glyphicon white\"></span>\n  </a>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_website_model_client__ = __webpack_require__("../../../../../src/app/model/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    WebsiteNewComponent.prototype.addWebsite = function () {
        if (this.name) {
            this.websiteService.createWebsite(new __WEBPACK_IMPORTED_MODULE_2__model_website_model_client__["a" /* Website */]('', this.name, this.userId, this.description));
        }
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object])
], WebsiteNewComponent);

var _a, _b;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\n    </a>\n    <a class=\"navbar-brand\" href=\"#\">Widget-chooser</a>\n    <a class=\" navbar-brand pull-right\" [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-ok black\"></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <ul class = \"list-group \">\n      <li class=\"list-group-item \">\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','heading']\">\n          Header\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','youtube']\">\n          Youtube\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a  [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','image']\">\n          Image\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a  [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','html']\">\n          HTML\n        </a>\n      </li>\n\n\n    </ul>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object])
], WidgetChooserComponent);

var _a, _b;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\n    </a>\n    <a class=\"navbar-brand\" >Widget-heading</a>\n\n    <a class=\" navbar-brand pull-right\" (click)=\"createWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-ok black\"></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <label for=\"pagename\">Name</label>\n    <input\n      placeholder=\"widget heading\"\n      type = \"text\"\n      id = \"pagename\"\n      class=\" form-control\"/>\n    <label for= \"text\">Text</label>\n    <input [(ngModel)]='text'\n           name=\"text\"\n      placeholder=\"President trump needs to do some work rather than playing golf\"\n      type = \"text\"\n      id = \"text\"\n      class=\" form-control\"/>\n    <label for=\"URL\">Size</label>\n    <input [(ngModel)]='size'\n           name=\"size\"\n      placeholder=\"5\"\n      type = \"text\"\n      id = \"URL\"\n      class=\" form-control\"/>\n\n    <a (click)=\"deleteWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\" class=\"btn btn-danger btn-block\">Delete</a>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user/',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        if (this.widgetId) {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
            this.size = this.widget.size;
            this.text = this.widget.text;
        }
    };
    WidgetHeaderComponent.prototype.createWidget = function () {
        if (this.widgetId) {
            this.widgetService.updateWidget({ 'type': 'HEADING', 'text': this.text, 'size': this.size }, this.widgetId);
        }
        else {
            this.widgetService.createWidget({ 'type': 'HEADING', 'text': this.text, 'size': this.size }, this.pageId);
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId);
        }
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object])
], WidgetHeaderComponent);

var _a, _b;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\n    </a>\n    <a class=\"navbar-brand\">Widget-image</a>\n    <a class=\" navbar-brand pull-right\" (click)=\"createWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-ok black\"></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <label for=\"username\">Name</label>\n    <input\n      placeholder=\"widget Name\"\n      type = \"text\"\n      id = \"username\"\n      class=\" form-control\"/>\n\n    <label for=\"Email\">Text</label>\n    <input [(ngModel)]='text'\n           name=\"text\"\n      placeholder=\"Description\"\n      type = \"text\"\n      id = \"Email\"\n      class=\" form-control\"/>\n\n    <label for=\"URL\">URL</label>\n    <input [(ngModel)]='url' name=\"url\"\n      placeholder=\"https://www.facebook.com\"\n      type = \"text\"\n      id = \"URL\"\n      class=\" form-control\"/>\n\n    <label for=\"username\">Width</label>\n    <input [(ngModel)]='width' name=\"width\"\n      placeholder=\"100%\"\n      type = \"text\"\n      id = \"Width\"\n      class=\" form-control\"/>\n\n    <label for=\"upload\">Upload</label>\n    <input\n      placeholder=\"Choose File  No file chosen\"\n      type = \"text\"\n      id = \"Upload\"\n      class=\" form-control\"/>\n    <a [routerLink]=\"[]\" class=\"btn btn-primary btn-block\">Upload Image</a>\n    <a (click)=\"deleteWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\" class=\"btn btn-danger btn-block\">Delete</a>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a href = \"../User1/profile.html\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        if (this.widgetId) {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
            this.width = this.widget.width;
            this.url = this.widget.url;
            this.text = this.widget.text;
        }
    };
    WidgetImageComponent.prototype.createWidget = function () {
        if (this.widgetId) {
            this.widgetService.updateWidget({
                'type': 'IMAGE',
                'text': this.text,
                'width': this.width,
                'url': this.url
            }, this.widgetId);
        }
        else {
            this.widgetService.createWidget({
                'type': 'IMAGE',
                'text': this.text,
                'width': this.width,
                'url': this.url
            }, this.pageId);
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId);
        }
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-chevron-left black\" style=\"color: black\"></span>\n    </a>\n    <a class=\"navbar-brand\" href=\"#\">Widget-Youtube</a>\n    <a class=\" navbar-brand pull-right\"  (click)=\"createWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\n      <span class = \"glyphicon glyphicon-ok black\"></span>\n    </a>\n\n  </nav>\n\n  <div class=\"container-fluid content-top-margin\">\n    <label for=\"username\">Name</label>\n    <input\n      placeholder=\"widget Name\"\n      type = \"text\"\n      id = \"username\"\n      class=\" form-control\"/>\n    <label for=\"text\">Text</label>\n    <input [(ngModel)]='text'\n           name=\"text\"\n      placeholder=\"Description\"\n      type = \"text\"\n      id = \"text\"\n      class=\" form-control\"/>\n    <label for=\"URL\">URL</label>\n    <input [(ngModel)]='url' name=\"url\"\n      placeholder=\"https://www.youtube.com\"\n      type = \"text\"\n      id = \"URL\"\n      class=\" form-control\"/>\n    <label for=\"username\">Width</label>\n    <input [(ngModel)]='width' name=\"width\"\n      placeholder=\"100%\"\n      type = \"text\"\n      id = \"Width\"\n      class=\" form-control\"/>\n    <a (click)=\"deleteWidget()\"\n       [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\"  class=\"btn btn-danger btn-block\">Delete</a>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n        <span class=\"glyphicon-user glyphicon\"></span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        if (this.widgetId) {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
            this.width = this.widget.width;
            this.url = this.widget.url;
        }
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        if (this.widgetId) {
            this.widgetService.updateWidget({
                'type': 'YOUTUBE',
                'width': this.width,
                'url': this.url
            }, this.widgetId);
        }
        else {
            this.widgetService.createWidget({ 'type': 'YOUTUBE', 'width': this.width, 'url': this.url }, this.pageId);
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId);
        }
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class =\"container-fluid\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n    <a class=\" navbar-brand pull-left chevron-right-margin\"[routerLink]=\"['/user',userId,'website',webId,'page']\">\n      <span class = \"glyphicon glyphicon-chevron-left black black\"></span>\n    </a>\n    <a class=\"navbar-brand\">Widgets</a>\n    <a class=\" navbar-brand pull-right\"[routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget','new']\">\n      <span class = \"glyphicon glyphicon-plus black\"></span>\n    </a>\n  </nav>\n\n\n\n  <div *ngFor=\"let widget of widgets\">\n  <div class=\"tps-widget\">\n    <div class=\"tps-toolbar\">\n      <a [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget',widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span></a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n  </div>\n\n\n    <div [ngSwitch]=\"widget.widgetType\">\n\n    <div *ngSwitchCase=\"'HEADING'\">\n    <h2>{{widget.text}}</h2>\n  </div>\n\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <img [style.width]=\"widget.width+'%'\" height=\"300\"\n           [src]=\"SafeUrl(widget.url)\">\n  </div>\n\n    <div *ngSwitchCase= \"'YOUTUBE'\">\n      <iframe [style.width]=\"widget.width+'%'\" height=\"300\" [src]= \"SafeUrl(widget.url)\"> </iframe>\n  </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <p> {{widget.text}}</p>\n      </div>\n\n    </div>\n  </div>\n\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n\n    <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\n      <span class=\"glyphicon-user glyphicon\"></span>\n    </a>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(route, widgetService, domsan) {
        this.route = route;
        this.widgetService = widgetService;
        this.domsan = domsan;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgets = _this.widgetService.findWidgetByPageId(_this.pageId);
        });
    };
    WidgetListComponent.prototype.SafeUrl = function (url) {
        return this.domsan.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.websiteId = websiteId;
        this.description = description;
        this.name = name;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/model/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.developerId = developerId;
        this.description = description;
        this.name = name;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/model/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, widgetType, pageId, size, text, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_page_model_client__ = __webpack_require__("../../../../../src/app/model/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Pageservice = (function () {
    function Pageservice() {
        this.pages = [
            new __WEBPACK_IMPORTED_MODULE_1__model_page_model_client__["a" /* Page */]('321', 'post1', '456', 'Lorem Ipsum'),
            new __WEBPACK_IMPORTED_MODULE_1__model_page_model_client__["a" /* Page */]('432', 'Blog', '456', 'Lorem Ipsum'),
            new __WEBPACK_IMPORTED_MODULE_1__model_page_model_client__["a" /* Page */]('543', 'post3', '456', 'Lorem Ipsum')
        ];
    }
    Pageservice.prototype.createPage = function (page, websiteId) {
        var pageId = Math.random().toString();
        var pageAdded = new page(pageId, page.name, websiteId, page.description);
        this.pages.push(pageAdded);
    };
    Pageservice.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].description = page.description;
                return this.pages[x];
            }
        }
    };
    Pageservice.prototype.deletePage = function (pageId) {
        var pagedeleted = this.pages.find(function (page) {
            return page._id === pageId;
        });
        var index = this.pages.indexOf(pagedeleted);
        this.pages.splice(index, 1);
    };
    Pageservice.prototype.findPageByID = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    Pageservice.prototype.findPageByWebsiteId = function (websiteId) {
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    };
    return Pageservice;
}());
Pageservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Pageservice);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Userservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_model_client__ = __webpack_require__("../../../../../src/app/model/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Userservice = (function () {
    function Userservice() {
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_1__model_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__model_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__model_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__model_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@gmail.com')
        ];
    }
    Userservice.prototype.createuser = function (user) {
        user._id = Math.random().toString();
        this.users.push(user);
        return user._id;
    };
    Userservice.prototype.findUserById = function (userid) {
        for (var i = 0; i < this.users.length; i++) {
            if (userid === this.users[i]._id) {
                return this.users[i];
            }
        }
    };
    Userservice.prototype.findUserByUsername = function (username) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username) {
                return this.users[i];
            }
        }
    };
    Userservice.prototype.finduserByCredentials = function (username, password) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username && this.users[i].password === password) {
                return this.users[i];
            }
        }
    };
    Userservice.prototype.updateUser = function (userId, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
                this.users[i].username = user.userName;
                this.users[i].email = user.email;
                return this.users[i];
            }
        }
    };
    Userservice.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }
    };
    return Userservice;
}());
Userservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Userservice);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
    }
    WebsiteService.prototype.createWebsite = function (website) {
        var wID = Math.random().toString();
        website._id = wID;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (website) {
            return website._id === websiteId;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].description = website.description;
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var web = this.websites.find(function (website) {
            return website._id === websiteId;
        });
        var index = this.websites.indexOf(web);
        this.websites.splice(index, 1);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widgetservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__ = __webpack_require__("../../../../../src/app/model/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Widgetservice = (function () {
    function Widgetservice() {
        this.widgets = [
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('456', 'HEADING', '321', 2, 'Gizmodo', '', ''),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('234', 'HEADING', '321', 4, 'Lorem Ipsum', '', ''),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('123', 'IMAGE', '321', '', '', '100', 'http://lorempixel.com/400/200/'),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('345', 'HTML', '321', '', 'Html content from service', '', ''),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('567', 'HEADING', '321', 4, 'Lorem Ipsum', '', ''),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('678', 'YOUTUBE', '321', '', '', '100', 'https://www.youtube.com/embed/nhyc5ca3eVw'),
            new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */]('789', 'HTML', '321', '', 'another html contents', '', '')
        ];
    }
    Widgetservice.prototype.createWidget = function (widget, pageId) {
        var widgetId = Math.random().toString();
        if (widget.type === 'HEADING') {
            var w = new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */](widgetId, widget.type, pageId, widget.size, widget.text, '', '');
            this.widgets.push(w);
        }
        else if (widget.type === 'IMAGE') {
            var w = new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */](widgetId, widget.type, pageId, '', '', widget.width, widget.url);
            this.widgets.push(w);
        }
        else if (widget.type === 'HTML') {
            var w = new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */](widgetId, widget.type, pageId, '', widget.text, '', '');
            this.widgets.push(w);
        }
        else if (widget.type === 'YOUTUBE') {
            var w = new __WEBPACK_IMPORTED_MODULE_1__model_widget_model_client__["a" /* Widget */](widgetId, widget.type, pageId, '', '', widget.width, widget.url);
            this.widgets.push(w);
        }
    };
    Widgetservice.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    Widgetservice.prototype.findWidgetByPageId = function (pageId) {
        console.log('this is pageid' + pageId);
        return this.widgets.filter(function (widget) {
            return widget.pageId === pageId;
        });
    };
    Widgetservice.prototype.deleteWidget = function (widgetId) {
        var wid = this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
        var i = this.widgets.indexOf(wid);
        this.widgets.splice(i, 1);
    };
    Widgetservice.prototype.updateWidget = function (widget, widgetId) {
        var update = this.widgets.find(function (widget1) {
            return widget1._id === widgetId;
        });
        if (widget.type === 'YOUTUBE') {
            update.width = widget.width;
            update.url = widget.url;
        }
        else if (widget.type === 'IMAGE') {
            update.text = widget.text;
            update.url = widget.url;
            update.width = widget.width;
        }
        else if (widget.type === 'HEADING') {
            update.text = widget.text;
            update.size = widget.size;
        }
    };
    return Widgetservice;
}());
Widgetservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Widgetservice);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map