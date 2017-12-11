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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
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
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_24__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* Userservice */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* Pageservice */], __WEBPACK_IMPORTED_MODULE_29__services_widget_service_client__["a" /* Widgetservice */], __WEBPACK_IMPORTED_MODULE_28__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuard */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/**
 * Created by sesha on 7/26/17.
 */






















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_17__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_9__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image/search', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuard */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../font-awesome/css/font-awesome.min.css"), "");

// module
exports.push([module.i, "/*\r\n * Template Name: Developer - Responsive Website Template for Developers\r\n * Version: 1.5\r\n * Author: Xiaoying Riley\r\n * Twitter: @3rdwave_themes\r\n * License: Creative Commons Attribution 3.0 License\r\n * Website: http://themes.3rdwavemedia.com/\r\n*/\r\n/* ======= Base ======= */\r\nbody {\r\n  font-family: 'Lato', arial, sans-serif;\r\n  color: #434343;\r\n  background: #DAE3E7;\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 700;\r\n  color: #778492;\r\n}\r\na {\r\n  color: #3AAA64;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  -moz-transition: all 0.4s ease-in-out;\r\n  -ms-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n}\r\na:hover {\r\n  text-decoration: underline;\r\n  color: #5f6b77;\r\n  color: #2d844e;\r\n}\r\na:focus {\r\n  text-decoration: none;\r\n}\r\n.btn,\r\na.btn {\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  -moz-transition: all 0.4s ease-in-out;\r\n  -ms-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  font-family: 'Montserrat', arial, sans-serif;\r\n  padding: 8px 16px;\r\n  font-weight: bold;\r\n}\r\n.btn .fa,\r\na.btn .fa {\r\n  margin-right: 5px;\r\n}\r\n.btn:focus,\r\na.btn:focus {\r\n  color: #fff;\r\n}\r\na.btn-cta-primary,\r\n.btn-cta-primary {\r\n  background: #54ba4e;\r\n  border: 1px solid #54ba4e;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\na.btn-cta-primary:hover,\r\n.btn-cta-primary:hover {\r\n  background: #49ac43;\r\n  border: 1px solid #49ac43;\r\n  color: #fff;\r\n}\r\na.btn-cta-secondary,\r\n.btn-cta-secondary {\r\n  background: #479FC8;\r\n  border: 1px solid #479FC8;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\na.btn-cta-secondary:hover,\r\n.btn-cta-secondary:hover {\r\n  background: #3893bd;\r\n  border: 1px solid #3893bd;\r\n  color: #fff;\r\n}\r\n.text-highlight {\r\n  color: #32383e;\r\n}\r\n.label-theme {\r\n  background: #3AAA64;\r\n  font-size: 12px;\r\n}\r\na.dotted-link {\r\n  border-bottom: 1px dotted #778492;\r\n  color: #778492;\r\n}\r\na.dotted-link:hover {\r\n  text-decoration: none;\r\n  color: #49515a;\r\n}\r\n/*\r\niframe {\r\n\r\n    .header {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n.iframe-wrapper {\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling:touch;\r\n}\r\n*/\r\n/* ======= Header ======= */\r\n.header {\r\n  padding: 30px 0;\r\n  background: #f5f5f5;\r\n  border-top: 10px solid #778492;\r\n}\r\n.header .btn {\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n}\r\n.header .profile-image {\r\n  margin-right: 30px;\r\n}\r\n.header .profile-content .name {\r\n  color: #49515a;\r\n  font-size: 38px;\r\n  margin-bottom: 5px;\r\n  margin-top: 30px;\r\n}\r\n.header .profile-content .desc {\r\n  color: #778492;\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  margin-top: 0;\r\n  margin-bottom: 15px;\r\n}\r\n.header .profile-content .social a {\r\n  background: #b0b7bf;\r\n  width: 36px;\r\n  height: 36px;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  background-clip: padding-box;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.header .profile-content .social a:hover {\r\n  background: #778492;\r\n}\r\n.header .profile-content .social a .fa {\r\n  font-size: 20px;\r\n  padding-top: 8px;\r\n}\r\n/* ======= Sections======= */\r\n.sections-wrapper {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n}\r\n.section {\r\n  margin-bottom: 30px;\r\n}\r\n.section .section-inner {\r\n  background: #fff;\r\n  padding: 30px;\r\n}\r\n.section .heading {\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  color: #545e69;\r\n  font-size: 24px;\r\n}\r\n.section .content .more-link .fa {\r\n  margin-right: 5px;\r\n  font-size: 14px;\r\n}\r\n/* About Section */\r\n/* Latest Section */\r\n.latest .item {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .item .title {\r\n  font-size: 18px;\r\n  margin-top: 0;\r\n}\r\n.latest .item .title .label {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n}\r\n.latest .item .title a {\r\n  color: #778492;\r\n}\r\n.latest .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n.latest .item .project-image:hover {\r\n  -webkit-opacity: 0.8;\r\n  -moz-opacity: 0.8;\r\n  opacity: 0.8;\r\n}\r\n.latest .divider {\r\n  margin-bottom: 60px;\r\n}\r\n.latest .featured {\r\n  margin-bottom: 60px;\r\n}\r\n.latest .featured .title {\r\n  margin-bottom: 5px;\r\n  font-size: 20px;\r\n}\r\n.latest .featured .summary {\r\n  margin-bottom: 30px;\r\n  color: #778492;\r\n}\r\n.latest .featured img {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .featured .desc {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .featured-image {\r\n  position: relative;\r\n}\r\n.latest .featured-image .text {\r\n  background: #3AAA64;\r\n  color: #fff;\r\n}\r\n.latest .featured-image .ribbon {\r\n  position: absolute;\r\n  top: -4px;\r\n  right: -4px;\r\n  width: 110px;\r\n  height: 110px;\r\n  overflow: hidden;\r\n}\r\n.latest .featured-image .ribbon .text {\r\n  font-family: 'Montserrat', sans-serif;\r\n  position: relative;\r\n  left: -8px;\r\n  top: 18px;\r\n  width: 158px;\r\n  padding: 10px 10px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  background-color: #479FC8;\r\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\r\n}\r\n.latest .featured-image .ribbon .text:before,\r\n.latest .featured-image .ribbon .text:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -5px;\r\n  border-top: 5px solid #276582;\r\n  border-left: 5px solid transparent;\r\n  border-right: 5px solid transparent;\r\n}\r\n.latest .featured-image .ribbon .text:before {\r\n  left: 0;\r\n}\r\n.latest .featured-image .ribbon .text:after {\r\n  right: 0;\r\n}\r\n/* Projects Section */\r\n.projects .item {\r\n  margin-bottom: 30px;\r\n}\r\n.projects .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  line-height: 1.5;\r\n}\r\n.projects .item .title a {\r\n  color: #778492;\r\n}\r\n.projects .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n/* Work Section */\r\n.experience .item {\r\n  margin-bottom: 30px;\r\n}\r\n.experience .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  line-height: 1.5;\r\n}\r\n.experience .item .title .place {\r\n  color: #999;\r\n  font-weight: normal;\r\n}\r\n.experience .item .title .place a {\r\n  color: #999;\r\n}\r\n.experience .item .title .place a:hover {\r\n  color: #666666;\r\n}\r\n.experience .item .title .year {\r\n  color: #999;\r\n  font-weight: normal;\r\n}\r\n/* Git section */\r\n.github-graph {\r\n  margin-bottom: 30px;\r\n}\r\n.github-graph .js-calendar-graph-svg {\r\n  max-width: 100%;\r\n}\r\n.ghfeed {\r\n  height: 600px;\r\n}\r\n.ghfeed,\r\n.ghfeed *,\r\n.ghfeed *:before,\r\n.ghfeed *:after {\r\n  box-sizing: content-box;\r\n}\r\n/* Info Section */\r\n.info .fa {\r\n  margin-right: 15px;\r\n  color: #ccd1d6;\r\n}\r\n.info .fa.fa-envelope-o {\r\n  font-size: 14px;\r\n}\r\n.info ul {\r\n  margin-bottom: 0;\r\n}\r\n.info li {\r\n  margin-bottom: 15px;\r\n}\r\n.info li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n/* Skills Section */\r\n.skills .intro {\r\n  margin-bottom: 30px;\r\n}\r\n.skills .skillset .item {\r\n  margin-bottom: 30px;\r\n}\r\n.skills .skillset .level-title {\r\n  font-size: 16px;\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 10;\r\n}\r\n.skills .skillset .level-title .level-label {\r\n  color: #ccd1d6;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.skills .skillset .level-bar {\r\n  height: 15px;\r\n  background: #e8e8e8;\r\n}\r\n.skills .skillset .level-bar-inner {\r\n  height: 15px;\r\n  background: #66cb8c;\r\n}\r\n/* Testimonials section */\r\n.testimonials .item {\r\n  margin-bottom: 30px;\r\n}\r\n.testimonials .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.testimonials .item .quote {\r\n  color: #666;\r\n  font-size: 16px;\r\n  border-left-color: #9fdeb7;\r\n  margin-bottom: 15px;\r\n}\r\n.testimonials .item .quote .fa {\r\n  color: #79d19a;\r\n  margin-right: 15px;\r\n}\r\n.testimonials .item .source {\r\n  font-size: 14px;\r\n  padding-left: 30px;\r\n  font-weight: 500;\r\n}\r\n.testimonials .item .source .name {\r\n  color: #939ea9;\r\n  font-weight: 600;\r\n}\r\n.testimonials .item .source .title {\r\n  color: #999;\r\n}\r\n/* Education section */\r\n.education .item {\r\n  margin-bottom: 30px;\r\n}\r\n.education .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.education .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n}\r\n.education .item .university {\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  font-size: 13px;\r\n  color: #999;\r\n  font-weight: 600;\r\n  padding-left: 25px;\r\n}\r\n.education .item .university .year {\r\n  color: #b0b7bf;\r\n  font-weight: 500;\r\n}\r\n/* Language Section */\r\n.languages .item {\r\n  margin-bottom: 15px;\r\n}\r\n.languages .item .title {\r\n  color: #778492;\r\n}\r\n.languages .item .level {\r\n  color: #999;\r\n}\r\n.languages .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.languages .item .fa {\r\n  color: #79d19a;\r\n}\r\n/* Blog Section */\r\n.blog .item {\r\n  margin-bottom: 30px;\r\n}\r\n.blog .item .title {\r\n  font-size: 18px;\r\n  line-height: 1.3;\r\n}\r\n.blog .item .title a {\r\n  color: #778492;\r\n}\r\n.blog .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n.blog .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n/* List section */\r\n.list ul li {\r\n  margin-bottom: 10px;\r\n}\r\n.list ul li .fa {\r\n  margin-right: 5px;\r\n}\r\n.list ul li a {\r\n  color: #778492;\r\n}\r\n.list ul li a:hover {\r\n  color: #49515a;\r\n}\r\n/* Credits */\r\n.credits ul li {\r\n  margin-bottom: 10px;\r\n}\r\n.credits ul li .fa {\r\n  margin-right: 5px;\r\n}\r\n.credits ul li a {\r\n  color: #778492;\r\n}\r\n.credits ul li a:hover {\r\n  color: #49515a;\r\n}\r\n.credits .btn {\r\n  margin-bottom: 15px;\r\n}\r\n/* ======= Footer ======= */\r\n.footer {\r\n  background: #32383e;\r\n  color: #fff;\r\n  padding: 10px 0;\r\n}\r\n.footer .copyright {\r\n  line-height: 1.6;\r\n  color: #a1aab4;\r\n  font-size: 14px;\r\n}\r\n.footer a {\r\n  color: #fff;\r\n}\r\n.footer .fa-heart {\r\n  color: #fb866a;\r\n}\r\n/* Extra small devices (phones, less than 768px) */\r\n@media (max-width: 767px) {\r\n  .header {\r\n    text-align: center;\r\n  }\r\n  .header .profile-image {\r\n    float: none !important;\r\n    margin: 0 auto;\r\n  }\r\n  .header .profile-content {\r\n    float: none !important;\r\n    text-align: center;\r\n  }\r\n  .header .btn {\r\n    margin-top: 30px;\r\n    float: none !important;\r\n  }\r\n  .project-image {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n/* Small devices (tablets, 768px and up) */\r\n/* Medium devices (desktops, 992px and up) */\r\n/* Large devices (large desktops, 1200px and up) */\r\n/* Ex-Large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1400px) {\r\n  .container {\r\n    width: 1360px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n  <title>My Portfolio</title>\r\n  <meta charset=\"utf-8\">\r\n  <link href='http://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' rel='stylesheet' type='text/css'>\r\n  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\r\n\r\n  <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\r\n  <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n\r\n<header class=\"header\">\r\n  <div class=\"container\">\r\n    <img class=\"profile-image img-responsive pull-left\" src=\"../../../assets/images/profile.png\" />\r\n    <img src=\"\"/>\r\n    <div class=\"profile-content pull-left\">\r\n      <h1 class=\"name\">Tarunpreet Singh</h1>\r\n      <h2 class=\"desc\">Software Engineer</h2>\r\n      <ul class=\"social list-inline\">\r\n        <li><a href=\"https://www.facebook.com/tarunpreet99\"><i class=\"fa fa-facebook\"></i></a></li>\r\n        <li><a href=\"https://twitter.com/tarunpreet03\"><i class=\"fa fa-twitter\"></i></a></li>\r\n        <li><a href=\"https://www.linkedin.com/in/tarunpreet-singh\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n        <li class=\"last-item\"><a href=\"https://www.github.com/tarunpreet12\"><i class=\"fa fa-github\"></i></a></li>\r\n      </ul>\r\n    </div><!--//profile-->\r\n    <a class=\"btn btn-cta-primary pull-right\" href=\"http://www.linkedin.com/in/tarunpreet-singh\" target=\"_blank\"><i class=\"fa fa-paper-plane\"></i> Contact Me</a>\r\n  </div><!--//container-->\r\n</header><!--//header-->\r\n\r\n<div class=\"container sections-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"primary col-md-8 col-sm-12 col-xs-12\">\r\n      <section class=\"about section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">About Me</h2>\r\n          <div class=\"content\">\r\n            <p>My name is Tarunpreet Singh. I am pursuing my Masters in Computer Science from Northeastern University Boston and in my last semester. I am looking for full-time opportunities starting 2018. I have 3 years of industrial work experience as a Software Developer.</p>\r\n            <p>I like to go out and travel in my free time. I play pool, snooker and do bowling. I like to try different kind of foods</p>\r\n\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </section><!--//section-->\r\n\r\n      <section class=\"latest section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Latest Projects</h2>\r\n          <div class=\"content\">\r\n\r\n            <div class=\"item featured text-center\">\r\n              <h3 class=\"title\"><a href=\"#\" target=\"_blank\">E-Trash Management</a></h3>\r\n              <div class=\"featured-image\">\r\n                <a href=\"#\" target=\"_blank\">\r\n                  <img class=\"img-responsive project-image\" src=\"../../../assets/images/projects/featured.png\" alt=\"project name\" />\r\n                </a>\r\n                <div class=\"ribbon\">\r\n                  <div class=\"text\">New</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"desc text-left\">\r\n                <p> At E‐Trash Management, we provide a full suite of asset management platform to the Users to manage buy or sell their electronic waste rather than dumping it in trash. </p>\r\n                <p> E‐Trash Management  can be a complex challenge, sometimes requiring multiple vendors to handle shipping, packaging, storage, inventory, data destruction, logistics, disposal and recycling.\r\n                  If not done properly, you and your company could face serious penalties for improper disposal as well as extreme data security risks.\r\n                  We can help you eliminate that risk!</p>\r\n              </div><!--//desc-->\r\n\r\n            </div><!--//item-->\r\n\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </section><!--//section-->\r\n\r\n      <section class=\"projects section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Other Projects</h2>\r\n          <div class=\"content\">\r\n            <div class=\"item\">\r\n              <h3 class=\"title\"><a href=\"http://ec2-54-175-41-168.compute-1.amazonaws.com/\">Helmuth Labs</a></h3>\r\n              <p class=\"summary\">This gives a framework to Research and Marine scientists all around the world to fetch the data of temperature logging devices placed under oceans to\r\n                find out climate change and do the future predictions</p>\r\n              <p><a class=\"more-link\" href=\"http://ec2-54-175-41-168.compute-1.amazonaws.com\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Find out more</a></p>\r\n            </div><!--//item-->\r\n            <div class=\"item\">\r\n              <h3 class=\"title\"><a href=\"https://github.com/Tarunpreet12/Information-Retrieval-Projects\">Page Rank Algorithm</a> <span class=\"label label-theme\">Open Source</span></h3>\r\n              <p class=\"summary\">•\tPageRank calculates the rank of the webpage depending upon the factors like in links, out links and key phrases. </p>\r\n              <p><a class=\"more-link\" href=\"https://github.com/Tarunpreet12/Information-Retrieval-Projects\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\r\n            </div><!--//item-->\r\n            <div class=\"item\">\r\n              <h3 class=\"title\"><a href=\"https://github.com/Tarunpreet12/Information-Retrieval-Projects\">Web Crawler</a> <span class=\"label label-theme\">Open Source</span></h3>\r\n              <p class=\"summary\">the web crawler is developed using Java and elastic search.The crawler crawls the links within links of a webpage till it reaches certain depth.\r\n              </p>\r\n              <p><a class=\"more-link\" href=\"https://github.com/Tarunpreet12/Information-Retrieval-Projects\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\r\n            </div><!--//item-->\r\n\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </section><!--//section-->\r\n\r\n      <section class=\"experience section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Work Experience</h2>\r\n          <div class=\"content\">\r\n            <div class=\"item\">\r\n              <h3 class=\"title\">Software Engineer Co-op <span class=\"place\"><a href=\"www.Lifeyield.com\">LifeYield LLC</a></span> <span class=\"year\">(Jan 2017 - Aug 2017)</span></h3>\r\n              <p> •\tImplemented and upgraded the internal Public Key infrastructure from SHA1 to SHA256 algorithm using C#.\r\n                •\tDeveloped a web application using ASP.net following MVC architectural pattern, Code First Approach and SQL server.\r\n                •\tImplemented an audit microservice in C# following Test Driven Development(TDD) with Junit.\r\n                •\tDeveloped a web service for LifeYield Social Security Optimizer using C#, Service Fabric and RabbitMQ.\r\n                •\tWorked with CTO on developing a Microlevel -Service Architecture as a transformation from current Macro level\r\n              </p>\r\n            </div><!--//item-->\r\n            <div class=\"item\">\r\n              <h3 class=\"title\">Systems Engineer - <span class=\"place\"><a href=\"www.Infosys.com\">Infosys Ltd</a></span> <span class=\"year\">(Feb 2014 - Aug 2015)</span></h3>\r\n              <p> •\tDesigned and Development of middleware solutions using Java & IBM Integration Designer 8.0.1.2.\r\n                •\tPerformed Service Orchestration to process user request and exposing Restful and SOA web services.\r\n                •\tImplemented code in Java, XSLT and XML to implement the functionality among mediation flows.\r\n                •\tPerformance optimization by 15% latency factor of integrated components.\r\n                •\tProvided Quality assurance support and defect fixing using SoapUI API testing tool.\r\n              </p>\r\n            </div><!--//item-->\r\n\r\n            <div class=\"item\">\r\n              <h3 class=\"title\">Trainee Programmer <span class=\"place\"><a href=\"www.Biinfotech.com\">eBay</a></span> <span class=\"year\">(july 2013 - Jan 2014)</span></h3>\r\n              <p>•\tImplemented backend functionality in Java and developed schemas and tables using MySQL.</p>\r\n            </div><!--//item-->\r\n\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </section><!--//section-->\r\n\r\n    </div><!--//primary-->\r\n    <div class=\"secondary col-md-4 col-sm-12 col-xs-12\">\r\n      <aside class=\"info aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading sr-only\">Basic Information</h2>\r\n          <div class=\"content\">\r\n            <ul class=\"list-unstyled\">\r\n              <li><i class=\"fa fa-map-marker\"></i><span class=\"sr-only\">Location:</span>Boston, MA</li>\r\n              <li><i class=\"fa fa-envelope-o\"></i><span class=\"sr-only\">Email:</span><a href=\"#\">singh.tar@huksy.neu.edu</a></li>\r\n              <li><i class=\"fa fa-link\"></i><span class=\"sr-only\">LinkedIn:</span><a href=\"#\">http://www.linkedin.com/in/tarunpreet-singh</a></li>\r\n            </ul>\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside>\r\n\r\n\r\n      <aside class=\"info aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading sr-only\">Basic Information</h2>\r\n          <div class=\"content\">\r\n            <ul class=\"list-unstyled\">\r\n              <li>Web Development (CS5610) Assignments</li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/1.0\" target=\"_blank\">Assignment 1</a></li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/2.0\" target=\"_blank\">Assignment 2</a></li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/3.0\" target=\"_blank\">Assignment 3</a></li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/4.1\" target=\"_blank\">Assignment 4</a></li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/5.0\" target=\"_blank\">Assignment 5</a></li>\r\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/Tarunpreet12/webdev-singh-Tarunpreet/releases/tag/6\" target=\"_blank\">Assignment 6</a></li>\r\n\r\n            </ul>\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside>\r\n      <aside class=\"skills aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Skills</h2>\r\n          <div class=\"content\">\r\n            <p class=\"intro\">\r\n              I am proficient in Java, C#, ASP.net</p>\r\n\r\n            <div class=\"skillset\">\r\n\r\n              <div class=\"item\">\r\n                <h3 class=\"level-title\">Java, ASP.NET & C#<span class=\"level-label\" data-toggle=\"tooltip\" data-placement=\"left\" data-animation=\"true\" title=\"You can use the tooltip to add more info...\">Expert</span></h3>\r\n                <div class=\"level-bar\">\r\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\r\n                  </div>\r\n                </div><!--//level-bar-->\r\n              </div><!--//item-->\r\n\r\n              <div class=\"item\">\r\n                <h3 class=\"level-title\">Angular 4<span class=\"level-label\">Expert</span></h3>\r\n                <div class=\"level-bar\">\r\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\r\n                  </div>\r\n                </div><!--//level-bar-->\r\n              </div><!--//item-->\r\n\r\n              <div class=\"item\">\r\n                <h3 class=\"level-title\">HTML5, CSS3 & Bootstrap<span class=\"level-label\">Expert</span></h3>\r\n                <div class=\"level-bar\">\r\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\r\n                  </div>\r\n                </div><!--//level-bar-->\r\n              </div><!--//item-->\r\n\r\n              <div class=\"item\">\r\n                <h3 class=\"level-title\">Python<span class=\"level-label\">Pro</span></h3>\r\n                <div class=\"level-bar\">\r\n                  <div class=\"level-bar-inner\" data-level=\"85%\">\r\n                  </div>\r\n                </div><!--//level-bar-->\r\n              </div><!--//item-->\r\n\r\n            </div>\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside><!--//section-->\r\n\r\n      <aside class=\"testimonials aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Testimonials</h2>\r\n          <div class=\"content\">\r\n            <div class=\"item\">\r\n              <blockquote class=\"quote\">\r\n                <p><i class=\"fa fa-quote-left\"></i>Tarun performed an internship at my company LifeYield LLC as a software developer. He was chosen over quite a few candidates and has a wide and varied skill set in software development. His attitude is quite positive and Tarun is a team player with a good work ethic who worked on several successful projects at LifeYield.</p>\r\n              </blockquote>\r\n              <p class=\"source\"><span class=\"name\">Mark Hoffman</span><br /><span class=\"title\">CEO, LifeYield LLC</span></p>\r\n            </div><!--//item-->\r\n\r\n            <p><a class=\"more-link\" href=\"www.linkedin.com/in/tarunpreet-singh\"><i class=\"fa fa-external-link\"></i> More on Linkedin</a></p>\r\n\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside><!--//section-->\r\n\r\n      <aside class=\"education aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Education</h2>\r\n          <div class=\"content\">\r\n            <div class=\"item\">\r\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> Masters in Computer Science</h3>\r\n              <h4 class=\"university\">Northeastern University  <span class=\"year\">(2015-2017)</span></h4>\r\n            </div><!--//item-->\r\n            <div class=\"item\">\r\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> BTech Computer Science</h3>\r\n              <h4 class=\"university\">GGSIPU, Delhi <span class=\"year\">(2009-2013)</span></h4>\r\n            </div><!--//item-->\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside><!--//section-->\r\n\r\n      <aside class=\"languages aside section\">\r\n        <div class=\"section-inner\">\r\n          <h2 class=\"heading\">Languages</h2>\r\n          <div class=\"content\">\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"item\">\r\n                <span class=\"title\"><strong>English:</strong></span>\r\n                <span class=\"level\">Professional Proficiency <br class=\"visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> </span>\r\n              </li><!--//item-->\r\n              <li class=\"item\">\r\n                <span class=\"title\"><strong>Punjabi:</strong></span>\r\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\r\n              </li><!--//item-->\r\n              <li class=\"item\">\r\n                <span class=\"title\"><strong>Hindi:</strong></span>\r\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\r\n              </li>\r\n            </ul>\r\n          </div><!--//content-->\r\n        </div><!--//section-inner-->\r\n      </aside><!--//section-->\r\n\r\n\r\n\r\n    </div><!--//secondary-->\r\n  </div><!--//row-->\r\n</div><!--//masonry-->\r\n\r\n<!-- ******FOOTER****** -->\r\n<footer class=\"footer\">\r\n  <div class=\"container text-center\">\r\n    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\r\n    <small class=\"copyright\">Designed with <i class=\"fa fa-heart\"></i> by <a href=\"http:www.Linkedin.com/in/tarunpreet-singh\" target=\"_blank\">Tarunpreet</a></small>\r\n  </div><!--//container-->\r\n</footer><!--//footer-->\r\n\r\n<!-- Javascript -->\r\n\r\n</body>\r\n\r\n"

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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--back mark-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user/',userId,'website',websiteId,'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Edit Page</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--plus mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a  (click)=\"updatePage()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"body container-fluid\">\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputName\">Name</label>\r\n      <input [(ngModel)]=\"name\" name=\"name\" required minlength=\"1\"\r\n             type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Page Name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pageTitle\">Title</label>\r\n      <input [(ngModel)]=\"description\" name=\"desc\"\r\n             type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\">\r\n    </div>\r\n    <a (click)=\"deletePage()\"   class=\"btn btn-danger btn-block\">Delete</a>\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user/',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

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
    function PageEditComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            }, function (error) { });
            _this.pageService.findPageByID(_this.pageId)
                .subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.description = _this.page.description;
            }, function (error) { });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.pageId, { 'name': this.name, 'description': this.description })
            .subscribe(function (pages) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        }, function (error) { });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (pages) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        }, function (error) { });
    };
    PageEditComponent.prototype.createPage = function () {
        this.pageService.createPage({ 'name': this.name, 'description': this.description }, this.websiteId)
            .subscribe(function (pages) { }, function (error) { });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\" ></span>\r\n    </a>\r\n    <a class=\"navbar-brand\">Page list</a>\r\n    <a class=\" navbar-brand pull-right\" [routerLink]=\"['/user',userId,'website',websiteId,'page','new']\" >\r\n      <span class = \"glyphicon glyphicon-plus black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let p of pages\" >\r\n        <a [routerLink]=\"['/user',userId,'website', websiteId, 'page', p._id,'widget']\"><b>{{p.name}}</b> </a>\r\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',p._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\r\n      </li>\r\n    </ul>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            }, function (error) {
            });
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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\"[routerLink]=\"['/user',userId,'website',websiteId,'page']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\">New Page</a>\r\n    <a class=\" navbar-brand pull-right\" (click)=\"createPage()\">\r\n      <span class = \"glyphicon glyphicon-ok black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <label for=\"name\">Name</label>\r\n    <input [(ngModel)]='name'\r\n           name=\"name\"\r\n      placeholder=\"Page Name\"\r\n      type = \"text\"\r\n      id = \"name\"\r\n      class=\" form-control\"/>\r\n\r\n    <label for=\"description\">Title</label>\r\n    <input [(ngModel)]='description'\r\n           name=\"description\"\r\n      placeholder=\"Page Title\"\r\n      type = \"text\"\r\n      id = \"description\"\r\n      class=\" form-control\"/>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n    <a [routerLink]=\"['/user',userId,'website',websiteId,'page']\" class=\"btn btn-danger btn-block\">Cancel</a>\r\n  </div>\r\n</div>\r\n\r\n"

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
    function PageNewComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            }, function (error) {
            });
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageService.createPage({ 'name': this.name, 'description': this.description }, this.websiteId)
            .subscribe(function (pages) {
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        }, function (error) { });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* Pageservice */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
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

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Login</h1>\r\n<form (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n\r\n  <input\r\n         placeholder=\"username\"\r\n         name=\"username\"\r\n         type=\"text\"\r\n         class=\"form-control\"\r\n         ngModel\r\n         required\r\n         #username= \"ngModel\"/>\r\n  <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n   </span>\r\n\r\n\r\n  <input\r\n         placeholder=\"password\"\r\n         name=\"password\"\r\n         type=\"password\"\r\n         class=\"form-control\"\r\n         ngModel\r\n         required\r\n         #password = \"ngModel\"/>\r\n  <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter Password!\r\n   </span>\r\n\r\n  <button class=\"btn btn-primary btn-block\"\r\n     type=\"submit\"\r\n     [disabled]= \"!f.valid\">Login</button>\r\n\r\n  <button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\r\n</form>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid Username or Password';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('I am in component');
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.errorFlag = false;
            _this.sharedService.user = data;
            _this.router.navigate(['/profile']);
        }, function (error) {
            _this.errorFlag = true;
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* Userservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Profile</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateUser()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             placeholder=\"alice\">\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             placeholder=\"alice.wonderland@unicorn.com\">\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input [(ngModel)]=\"firstname\"\r\n             name=\"firstName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"first-name\"\r\n             placeholder=\"Alice\">\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input [(ngModel)]=\"lastname\"\r\n             name=\"lastName\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"last-name\"\r\n             placeholder=\"Wonderland\">\r\n    </div>\r\n  </form>\r\n\r\n  <a class=\"btn btn-primary btn-block\"\r\n     [routerLink]=\"['/user',userId,'website']\">Websites</a>\r\n  <a class=\"btn btn-danger btn-block \"\r\n     [routerLink]= \"['/login']\"> Logout </a>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['user',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(route, router, userService, sharedService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.user = _this.sharedService.user || _this.user;
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.router.navigate(['/user/', _this.userId]);
        }, function (error) {
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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

module.exports = "\r\n\r\n<div class=\"container-fluid\">\r\n  <div *ngIf=\"dupFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{dupUserMsg}}\r\n  </div>\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n  <h1>Register</h1>\r\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n  <input placeholder=\"username\"\r\n         name=\"username\"\r\n         type=\"text\"\r\n         class=\"form-control\"\r\n         ngModel\r\n         required\r\n         #username=\"ngModel\"/>\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n   </span>\r\n\r\n\r\n  <input placeholder=\"password\"\r\n         name=\"password\"\r\n         type=\"password\"\r\n         class=\"form-control\"\r\n         ngModel\r\n         required\r\n         #password= \"ngModel\"/>\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n   </span>\r\n\r\n\r\n  <input placeholder=\"verify password\"\r\n         name=\"verifyPassword\"\r\n         type=\"password\"\r\n         class=\"form-control\"\r\n  ngModel\r\n  required\r\n  #verifyPassword= \"ngModel\"/>\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n   </span>\r\n\r\n\r\n    <button class=\"btn btn-primary btn-block\"\r\n            type=\"submit\"\r\n            [disabled]=\"!f.valid\">Register</button>\r\n\r\n    <a class=\"btn btn-danger btn-block\"\r\n       routerLink=\"/login\" >Cancel</a>\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match !';
        this.dupUserMsg = 'User Already Exists';
        this.newuser = {};
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.password2 = this.registerForm.value.password2;
        if (this.password !== this.password2) {
            console.log('I am in components');
            this.errorFlag = true;
            return;
        }
        this.userService.register(this.username, this.password)
            .subscribe(function (user) {
            console.log(user);
            _this.sharedService.user = user;
            _this.router.navigate(['profile']);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* Userservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"row container-fluid\">\r\n\r\n    <div class=\"col-sm-1\">\r\n      <!-- Back Mark-->\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user/',userId,'website']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-3 hidden-xs\">\r\n      <!-- Header -->\r\n      <div class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          Websites\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user/',userId,'website','new']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </a>\r\n      </div>\r\n    </div> <!-- Small Screen div -->\r\n\r\n\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          Edit Website\r\n        </a>\r\n      </div>\r\n\r\n      <!-- OK Button -->\r\n      <div class=\"navbar-text pull-right\">\r\n        <a class=\"navbar-link\" (click)=\"updateWebsite()\"  >\r\n          <span class=\"glyphicon glyphicon-ok\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<!-- Main content Body -->\r\n<div class=\"body row container-fluid\">\r\n  <div class=\"col-sm-4 hidden-xs\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let w of websites\" >\r\n        <a [routerLink]=\"['/user/',userId,'website',w._id,'page']\"><b>{{w.name}}</b> </a>\r\n        <a [routerLink]=\"['/user/',userId,'website',w._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <!-- Right Pane form -->\r\n  <div class=\"col-sm-8\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputName\">Name</label>\r\n        <input [(ngModel)]='name' name =\"name\" required minlength=\"1\"\r\n               type=\"text\" class=\"form-control\"  id=\"inputName\" placeholder=\"Blogger\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"desc\">Description</label>\r\n        <textarea [(ngModel)]='description' name =\"desc\"\r\n                  class=\"form-control\" rows=\"5\" id=\"desc\" placeholder=\"asds\"></textarea>\r\n      </div>\r\n      <a (click)=\"deleteWebsite()\"  class=\"btn btn-danger btn-block\">Delete</a>\r\n    </form>\r\n  </div>\r\n\r\n</div> >\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user/',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

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
    function WebsiteEditComponent(route, router, websiteService) {
        this.route = route;
        this.router = router;
        this.websiteService = websiteService;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                error.log('failed to update website');
            });
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (website) {
                _this.website = website;
                _this.name = _this.website.name;
                _this.description = _this.website.description;
            }, function (error) {
                console.log('failed to update website');
            });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.websiteId, { 'name': this.name, 'description': this.description })
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website']);
        }, function (error) {
            console.log('failed to update website');
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            _this.router.navigate(['/user', _this.userId, 'website']);
        }, function (error) {
            console.log('failed to delete website');
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--plus sign-->\r\n    <div class=\"navbar-brand pull-right right-margin-fix\">\r\n      <a [routerLink]=\"['/user', userId, 'website','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <!--back sign-->\r\n    <div class=\"navbar-brand pull-left left-margin-fix\">\r\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand \">\r\n        <b>Websites</b>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <ul class=\"list-group\">\r\n    <div *ngFor=\"let website of websites\">\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\r\n          {{website.name}}\r\n        </a>\r\n        <a [routerLink]=\"['/user', userId, 'website', website._id]\"\r\n           class=\"pull-right\">\r\n          <span class=\"glyphicon glyphicon-cog\"></span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  </ul>\r\n</div>\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <p class=\"navbar-brand pull-right\">\r\n    <a [routerLink]=\"['/user', userId]\">\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n    </a>\r\n  </p>\r\n</nav>\r\n"

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
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (website) {
                _this.websites = website;
            }, function (error) {
                console.error('Failed loading ... ');
            });
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"row container-fluid\">\r\n\r\n    <div class=\"col-sm-1\">\r\n      <!-- Back Mark-->\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user/',userId,'website']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-3 hidden-xs\">\r\n\r\n      <!-- Header -->\r\n      <div class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <b> Websites </b>\r\n        </a>\r\n      </div>\r\n\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/user/',userId,'website','new']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8 \">\r\n\r\n      <div class=\"navbar-header pull-left\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <b>New Website</b>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- OK Button -->\r\n      <div class=\"navbar-text pull-right\">\r\n        <a (click)=\"addWebsite()\"  class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<!-- Main content Body -->\r\n<div class=\"body row container-fluid\">\r\n  <div class=\"col-sm-4 hidden-xs\">\r\n    <ul class=\"list-group\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let w of websites\">\r\n          <a [routerLink]=\"['/user/',userId,'website',w._id,'page']\"><b>{{w.name}}</b> </a>\r\n          <a [routerLink]=\"['/user/',userId,'website',w._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\r\n        </li>\r\n      </ul>\r\n    </ul>\r\n  </div>\r\n\r\n  <!-- Right Pane form -->\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputName\">Name</label>\r\n      <input [(ngModel)]='name' type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\" required >\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea [(ngModel)]='description' class=\"form-control\" rows=\"5\" id=\"description\"></textarea>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user/',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
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




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(route, router, websiteService) {
        this.route = route;
        this.router = router;
        this.websiteService = websiteService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                error.log('failed to delete website');
            });
        });
    };
    WebsiteNewComponent.prototype.addWebsite = function () {
        var _this = this;
        if (this.name) {
            this.websiteService.createWebsite({ 'name': this.name, 'developerId': this.userId, 'description': this.description }, this.userId)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }, function (error) {
                error.log('failed to delete website');
            });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\" href=\"#\">Widget-chooser</a>\r\n    <a class=\" navbar-brand pull-right\" [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget']\">\r\n      <span class = \"glyphicon glyphicon-ok black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <ul class = \"list-group \">\r\n      <li class=\"list-group-item \">\r\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','heading']\">\r\n          Header\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','youtube']\">\r\n          Youtube\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"list-group-item\">\r\n        <a  [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','image']\">\r\n          Image\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a  [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','html']\">\r\n          HTML\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a  [routerLink]=\"['/user',userId,'website',websiteId,'page',pageId,'widget','new','text']\">\r\n          TEXT\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "<div *ngIf=\"isavailable\" [ngSwitch]=\"widget.widgetType\">\r\n\r\n  <div *ngSwitchCase=\"'HEADING'\">\r\n    <app-widget-header></app-widget-header>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'IMAGE'\">\r\n    <app-widget-image></app-widget-image>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'YOUTUBE'\">\r\n    <app-widget-youtube></app-widget-youtube>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'HTML'\">\r\n    <app-widget-html></app-widget-html>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'TEXT'\">\r\n    <app-widget-text></app-widget-text>\r\n  </div>\r\n\r\n</div>\r\n"

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
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.isavailable = true;
            }, function (error) { });
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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\" >Widget-heading</a>\r\n\r\n    <a class=\" navbar-brand pull-right\" (click)=\"createWidget()\">\r\n      <span class = \"glyphicon glyphicon-ok black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <label for=\"pagename\">Name</label>\r\n    <input\r\n      placeholder=\"widget heading\"\r\n      type = \"text\"\r\n      id = \"pagename\"\r\n      class=\" form-control\"/>\r\n    <label for= \"text\">Text</label>\r\n    <input [(ngModel)]='text'\r\n           name=\"text\"\r\n      placeholder=\"President trump needs to do some work rather than playing golf\"\r\n      type = \"text\"\r\n      id = \"text\"\r\n      class=\" form-control\"/>\r\n    <label for=\"URL\">Size</label>\r\n    <input [(ngModel)]='size'\r\n           name=\"size\"\r\n      placeholder=\"5\"\r\n      type = \"text\"\r\n      id = \"URL\"\r\n      class=\" form-control\"/>\r\n\r\n    <a (click)=\"deleteWidget()\" class=\"btn btn-danger btn-block\">Delete</a>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n"

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
    function WidgetHeaderComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
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
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.size = _this.widget.size;
                _this.text = _this.widget.text;
            }, function (error) { });
        }
    };
    WidgetHeaderComponent.prototype.createWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.updateWidget({ 'type': 'HEADING', 'text': this.text, 'size': this.size }, this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
        else {
            this.widgetService.createWidget({ 'type': 'HEADING', 'text': this.text, 'size': this.size }, this.pageId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Widget Edit</b>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"createWidget()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\"body container-fluid\">\r\n  <form>\r\n    <quill-editor [(ngModel)] = \"text\" name =  \"text\">\r\n    </quill-editor>\r\n\r\n    <a class=\"btn btn-danger btn-block \"\r\n\r\n       (click)=\"deleteWidget()\">Delete</a>\r\n  </form>\r\n</div>\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user ',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
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




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        if (this.widgetId) {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.size = _this.widget.size;
                _this.text = _this.widget.text;
            }, function (error) { });
        }
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.updateWidget({ 'type': 'HTML', 'text': this.text, 'size': this.size }, this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
        else {
            this.widgetService.createWidget({ 'type': 'HTML', 'text': this.text, 'size': this.size }, this.pageId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user/',userId,'website',webId,'page',pageId,'widget','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Search Flickr</b>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\"body container-fluid\">\r\n  <div class=\"input-group\">\r\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\r\n    <span class=\"input-group-btn\">\r\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\r\n           <span class=\"glyphicon glyphicon-search\"></span>\r\n         </a>\r\n      </span>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor = \"let pic of photos['photo']\"\r\n         class=\"col-xs-4\">\r\n      <img    (click)=\"selectPhoto(pic)\"\r\n              width=\"100%\"\r\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\r\n\r\n      <p></p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    // baseURL:string = environment.baseUrl;
    function FlickrImageSearchComponent(route, router, flickrService, widgetService) {
        this.route = route;
        this.router = router;
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.photos = [];
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            type: 'IMAGE',
            websiteId: this.webId,
            pageId: this.pageId,
            url: url
        };
        this.widgetService.createWidget(widget, this.pageId)
            .subscribe(function (data) {
            _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget', data._id]);
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\">Widget-image</a>\r\n    <a class=\" navbar-brand pull-right\" (click)=\"createWidget()\">\r\n      <span class = \"glyphicon glyphicon-ok black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <div class=\"body container-fluid\">\r\n      <form ngNoForm action=\"{{baseURL}}/api/uploads\" method=\"post\" enctype=\"multipart/form-data\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\"  required id=\"name\" placeholder=\"name\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"text\">Text</label>\r\n          <input [(ngModel)]='text' name=\"text\"\r\n                 type=\"text\" class=\"form-control\" id=\"text\" placeholder=\"info about image\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"url\">URL</label>\r\n          <input [(ngModel)]='url' name=\"url\"\r\n                 type=\"text\" class=\"form-control\" id=\"url\" placeholder=\"https://www.google.com\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"width\">Width</label>\r\n          <input [(ngModel)]='width' name=\"width\"\r\n                 type=\"text\" class=\"form-control\" id=\"width\" placeholder=\"100%\">\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"myFile\">\r\n            Upload\r\n          </label>\r\n          <input [(ngModel)]=\"upload\"\r\n                 required\r\n                 name=\"myFile\"\r\n                 type=\"file\"\r\n                 class=\"form-control\"\r\n                 id=\"myFile\"\r\n                 value=\"100%\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\r\n          <input  name=\"webId\" value=\"{{webId}}\"   style=\"display: none\"/>\r\n          <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\r\n          <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\r\n          <button type=\"submit\" class=\"form-control btn btn-primary\">\r\n            Upload Image\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <a class=\"btn btn-danger btn-block \" (click)=\"deleteWidget()\">Delete</a>\r\n\r\n\r\n      </form>\r\n\r\n      <button type=\"submit\" class=\"form-control btn btn-primary\"\r\n              [routerLink]=\"['/user/',userId,'website',webId,'page',pageId,'widget','new','image','search']\">\r\n        Search Image\r\n\r\n\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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





var WidgetImageComponent = (function () {
    function WidgetImageComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
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
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = _this.widget.width;
                _this.url = _this.widget.url;
            }, function (error) {
            });
        }
    };
    WidgetImageComponent.prototype.createWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.updateWidget({
                'type': 'IMAGE',
                'text': this.text,
                'width': this.width,
                'url': this.url
            }, this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
        else {
            this.widgetService.createWidget({
                'type': 'IMAGE',
                'text': this.text,
                'width': this.width,
                'url': this.url
            }, this.pageId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Widget Edit</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"createWidget()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"body container-fluid\">\r\n  <form>\r\n    Text\r\n    <input [(ngModel)]=\"widget.text\" name=\"text\" class=\"form-control\"/>\r\n\r\n    Rows\r\n    <input [(ngModel)]=\"widget.rows\"  name=\"rows\" class=\"form-control\" type=\"number\"/>\r\n    <label for=\"Name\">Name</label>\r\n    <div>\r\n      <input [(ngModel)]=\"widget.name\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"Name\"\r\n             name=\"name\"\r\n             required\r\n             placeholder=\"Name\">\r\n    </div>\r\n\r\n    Placeholder\r\n    <input [(ngModel)]=\"widget.placeholder\" name=\"placeholder\" class=\"form-control\" required/>\r\n    <p></p>\r\n    <div class=\"input-group\">\r\n      <input type=\"text\"\r\n             readonly\r\n             value=\"Formatted\"\r\n             class=\"form-control\"/>\r\n      <span class=\"input-group-addon\">\r\n     <input [(ngModel)]=\"widget.formatted\" name=\"formatted\"\r\n            type=\"checkbox\"/>\r\n </span>\r\n    </div>\r\n\r\n\r\n    <a class=\"btn btn-danger btn-block \"\r\n       (click)=\"deleteWidget()\">Delete</a>\r\n  </form>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user/',userId]\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
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




var WidgetTextComponent = (function () {
    function WidgetTextComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = { 'name': ' ', 'type': 'TEXT', 'text': '', 'rows': '', 'placeholder': '', 'formatted': '' };
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        if (this.widgetId) {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widget.type = 'TEXT';
                _this.size = _this.widget.size;
                _this.text = _this.widget.text;
            }, function (error) { });
        }
    };
    WidgetTextComponent.prototype.createWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widget.type = 'TEXT';
            this.widgetService.updateWidget(this.widget, this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
        else {
            this.widget.type = 'TEXT';
            this.widgetService.createWidget(this.widget, this.pageId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "\r\n<div class=\"container fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\" [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black\" style=\"color: black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\" href=\"#\">Widget-Youtube</a>\r\n    <a class=\" navbar-brand pull-right\"  (click)=\"createWidget()\">\r\n      <span class = \"glyphicon glyphicon-ok black\"></span>\r\n    </a>\r\n\r\n  </nav>\r\n\r\n  <div class=\"container-fluid content-top-margin\">\r\n    <label for=\"username\">Name</label>\r\n    <input\r\n      placeholder=\"widget Name\"\r\n      type = \"text\"\r\n      id = \"username\"\r\n      class=\" form-control\"/>\r\n    <label for=\"text\">Text</label>\r\n    <input [(ngModel)]='text'\r\n           name=\"text\"\r\n      placeholder=\"Description\"\r\n      type = \"text\"\r\n      id = \"text\"\r\n      class=\" form-control\"/>\r\n    <label for=\"URL\">URL</label>\r\n    <input [(ngModel)]='url' name=\"url\"\r\n      placeholder=\"https://www.youtube.com\"\r\n      type = \"text\"\r\n      id = \"URL\"\r\n      class=\" form-control\"/>\r\n    <label for=\"username\">Width</label>\r\n    <input [(ngModel)]='width' name=\"width\"\r\n      placeholder=\"100%\"\r\n      type = \"text\"\r\n      id = \"Width\"\r\n      class=\" form-control\"/>\r\n    <a (click)=\"deleteWidget()\" class=\"btn btn-danger btn-block\">Delete</a>\r\n\r\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n      <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n        <span class=\"glyphicon-user glyphicon\"></span>\r\n      </a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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
    function WidgetYoutubeComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
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
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = _this.widget.width;
                _this.url = _this.widget.url;
            }, function (error) {
            });
        }
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.updateWidget({
                'type': 'YOUTUBE',
                'width': this.width,
                'url': this.url
            }, this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
        else {
            this.widgetService.createWidget({ 'type': 'YOUTUBE', 'width': this.width, 'url': this.url }, this.pageId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        if (this.widgetId) {
            this.widgetService.deleteWidget(this.widgetId)
                .subscribe(function (widgets) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
            }, function (error) { });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widgetservice */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
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

module.exports = "\r\n<div class =\"container-fluid\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <a class=\" navbar-brand pull-left chevron-right-margin\"[routerLink]=\"['/user',userId,'website',webId,'page']\">\r\n      <span class = \"glyphicon glyphicon-chevron-left black black\"></span>\r\n    </a>\r\n    <a class=\"navbar-brand\">Widgets</a>\r\n    <a class=\" navbar-brand pull-right\"[routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget','new']\">\r\n      <span class = \"glyphicon glyphicon-plus black\"></span>\r\n    </a>\r\n  </nav>\r\n\r\n\r\n\r\n  <div *ngFor=\"let widget of widgets\">\r\n  <div class=\"tps-widget\">\r\n    <div class=\"tps-toolbar\">\r\n      <a [routerLink]=\"['/user',userId,'website',webId,'page',pageId,'widget',widget._id]\">\r\n        <span class=\"glyphicon glyphicon-cog\"></span></a>\r\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    <div [ngSwitch]=\"widget.widgetType\">\r\n\r\n    <div *ngSwitchCase=\"'HEADING'\">\r\n    <h2>{{widget.text}}</h2>\r\n  </div>\r\n\r\n\r\n    <div *ngSwitchCase=\"'IMAGE'\">\r\n      <img [style.width]=\"widget.width+'%'\" height=\"300\"\r\n           [src]=\"SafeUrl(widget.url)\">\r\n  </div>\r\n\r\n    <div *ngSwitchCase= \"'YOUTUBE'\">\r\n      <iframe [style.width]=\"widget.width+'%'\" height=\"300\" [src]= \"SafeUrl(widget.url)\"> </iframe>\r\n  </div>\r\n\r\n      <div *ngSwitchCase=\"'HTML'\">\r\n        <p> {{widget.text}}</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n\r\n    <a [routerLink]=\"['/user',userId]\" class=\"pull-right\">\r\n      <span class=\"glyphicon-user glyphicon\"></span>\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

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
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetByPageId(_this.pageId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (error) { });
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

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* Userservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* Userservice */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '332df18a6d124e7657ed803ab54a6e34';
        this.secret = '1a9e5eb0bb1bd86a';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search &format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Pageservice = (function () {
    function Pageservice(http) {
        this.http = http;
        this.base = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl;
    }
    Pageservice.prototype.createPage = function (page, websiteId) {
        var url = this.base + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    Pageservice.prototype.updatePage = function (pageId, page) {
        var url = this.base + '/api/page/' + pageId;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    Pageservice.prototype.deletePage = function (pageId) {
        var url = this.base + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    Pageservice.prototype.findPageByID = function (pageId) {
        var url = this.base + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    Pageservice.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.base + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return Pageservice;
}());
Pageservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Pageservice);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
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

var SharedService = (function () {
    function SharedService() {
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function Userservice(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.domain = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    Userservice.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.domain + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    Userservice.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.domain + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    Userservice.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.domain + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    Userservice.prototype.register = function (username, password) {
        console.log('I am in register client');
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.domain + '/api/register', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    Userservice.prototype.findUserById = function (userId) {
        var url = this.domain + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    Userservice.prototype.findUserByUsername = function (username) {
        var url = this.domain + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    Userservice.prototype.createUser = function (user) {
        var url = this.domain + '/api/user/';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    Userservice.prototype.updateUser = function (userId, user) {
        var url = this.domain + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    return Userservice;
}());
Userservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], Userservice);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
    function WebsiteService(http) {
        this.http = http;
        this.base = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (website, userId) {
        var url = this.base + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.base + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.base + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.base + '/api/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.base + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widgetservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
    function Widgetservice(http) {
        this.http = http;
        this.base = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    Widgetservice.prototype.createWidget = function (widget, pageId) {
        var url = this.base + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    Widgetservice.prototype.findWidgetById = function (widgetId) {
        var url = this.base + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    Widgetservice.prototype.findWidgetByPageId = function (pageId) {
        var url = this.base + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    Widgetservice.prototype.deleteWidget = function (widgetId) {
        var url = this.base + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    Widgetservice.prototype.updateWidget = function (widget, widgetId) {
        var url = this.base + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    return Widgetservice;
}());
Widgetservice = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Widgetservice);

var _a;
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