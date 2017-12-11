webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\ninput{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.glyphicon-user,.glyphicon-play,.glyphicon-eye-open{\r\n  margin-bottom: 5px;\r\n  margin-top: 15px ;\r\n  margin-right: 15px;\r\n}\r\n\r\n.navbar-fixed-top{\r\n  margin-bottom: 25px;\r\n\r\n}\r\n.black{\r\n  color: black;\r\n}\r\n\r\n.white{\r\n  color: white;\r\n}\r\n\r\n.content-top-margin{\r\n  margin-top: 70px;\r\n}\r\n\r\n\r\n.chevron-right-margin{\r\n  margin-right: 10px;\r\n}\r\nbody {\r\n  padding-top: 60px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.tps-widget .tps-toolbar{\r\n  position: absolute;right: 15px;\r\n  background-color: grey;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n  opacity: 0.5;\r\n}\r\n.tps-widget .tps-content{\r\n  width: 100%;\r\n}\r\n\r\n.bg-blue-color{\r\n  background-color: #337ab7;\r\n}\r\n\r\n\r\n\r\n\r\n.btn{\r\n  margin-bottom: 5px;\r\n}\r\n.row{\r\n  margin: 0px;\r\n}\r\n.body{\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\n.wdv-toolbar{\r\n  position: absolute;\r\n  right: 2px;\r\n  background-color: lightgrey;\r\n  padding: 3px;\r\n  border-bottom-left-radius: 9px;\r\n  opacity: 0.7;\r\n}\r\n\r\n\r\n/*\r\n * Template Name: Developer - Responsive Website Template for Developers\r\n * Version: 1.5\r\n * Author: Xiaoying Riley\r\n * Twitter: @3rdwave_themes\r\n * License: Creative Commons Attribution 3.0 License\r\n * Website: http://themes.3rdwavemedia.com/\r\n*/\r\n/* ======= Base ======= */\r\nbody {\r\n  font-family: 'Lato', arial, sans-serif;\r\n  color: #434343;\r\n  background: #DAE3E7;\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 700;\r\n  color: #778492;\r\n}\r\na {\r\n  color: #3AAA64;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  -moz-transition: all 0.4s ease-in-out;\r\n  -ms-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n}\r\na:hover {\r\n  text-decoration: underline;\r\n  color: #5f6b77;\r\n  color: #2d844e;\r\n}\r\na:focus {\r\n  text-decoration: none;\r\n}\r\n.btn,\r\na.btn {\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  -moz-transition: all 0.4s ease-in-out;\r\n  -ms-transition: all 0.4s ease-in-out;\r\n  -o-transition: all 0.4s ease-in-out;\r\n  font-family: 'Montserrat', arial, sans-serif;\r\n  padding: 8px 16px;\r\n  font-weight: bold;\r\n}\r\n.btn .fa,\r\na.btn .fa {\r\n  margin-right: 5px;\r\n}\r\n.btn:focus,\r\na.btn:focus {\r\n  color: #fff;\r\n}\r\na.btn-cta-primary,\r\n.btn-cta-primary {\r\n  background: #54ba4e;\r\n  border: 1px solid #54ba4e;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\na.btn-cta-primary:hover,\r\n.btn-cta-primary:hover {\r\n  background: #49ac43;\r\n  border: 1px solid #49ac43;\r\n  color: #fff;\r\n}\r\na.btn-cta-secondary,\r\n.btn-cta-secondary {\r\n  background: #479FC8;\r\n  border: 1px solid #479FC8;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\na.btn-cta-secondary:hover,\r\n.btn-cta-secondary:hover {\r\n  background: #3893bd;\r\n  border: 1px solid #3893bd;\r\n  color: #fff;\r\n}\r\n.text-highlight {\r\n  color: #32383e;\r\n}\r\n.label-theme {\r\n  background: #3AAA64;\r\n  font-size: 12px;\r\n}\r\na.dotted-link {\r\n  border-bottom: 1px dotted #778492;\r\n  color: #778492;\r\n}\r\na.dotted-link:hover {\r\n  text-decoration: none;\r\n  color: #49515a;\r\n}\r\n/*\r\niframe {\r\n\r\n    .header {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n.iframe-wrapper {\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling:touch;\r\n}\r\n*/\r\n/* ======= Header ======= */\r\n.header {\r\n  padding: 30px 0;\r\n  background: #f5f5f5;\r\n  border-top: 10px solid #778492;\r\n}\r\n.header .btn {\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n}\r\n.header .profile-image {\r\n  margin-right: 30px;\r\n}\r\n.header .profile-content .name {\r\n  color: #49515a;\r\n  font-size: 38px;\r\n  margin-bottom: 5px;\r\n  margin-top: 30px;\r\n}\r\n.header .profile-content .desc {\r\n  color: #778492;\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  margin-top: 0;\r\n  margin-bottom: 15px;\r\n}\r\n.header .profile-content .social a {\r\n  background: #b0b7bf;\r\n  width: 36px;\r\n  height: 36px;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  background-clip: padding-box;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.header .profile-content .social a:hover {\r\n  background: #778492;\r\n}\r\n.header .profile-content .social a .fa {\r\n  font-size: 20px;\r\n  padding-top: 8px;\r\n}\r\n/* ======= Sections======= */\r\n.sections-wrapper {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n}\r\n.section {\r\n  margin-bottom: 30px;\r\n}\r\n.section .section-inner {\r\n  background: #fff;\r\n  padding: 30px;\r\n}\r\n.section .heading {\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  color: #545e69;\r\n  font-size: 24px;\r\n}\r\n.section .content .more-link .fa {\r\n  margin-right: 5px;\r\n  font-size: 14px;\r\n}\r\n/* About Section */\r\n/* Latest Section */\r\n.latest .item {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .item .title {\r\n  font-size: 18px;\r\n  margin-top: 0;\r\n}\r\n.latest .item .title .label {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n}\r\n.latest .item .title a {\r\n  color: #778492;\r\n}\r\n.latest .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n.latest .item .project-image:hover {\r\n  -webkit-opacity: 0.8;\r\n  -moz-opacity: 0.8;\r\n  opacity: 0.8;\r\n}\r\n.latest .divider {\r\n  margin-bottom: 60px;\r\n}\r\n.latest .featured {\r\n  margin-bottom: 60px;\r\n}\r\n.latest .featured .title {\r\n  margin-bottom: 5px;\r\n  font-size: 20px;\r\n}\r\n.latest .featured .summary {\r\n  margin-bottom: 30px;\r\n  color: #778492;\r\n}\r\n.latest .featured img {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .featured .desc {\r\n  margin-bottom: 30px;\r\n}\r\n.latest .featured-image {\r\n  position: relative;\r\n}\r\n.latest .featured-image .text {\r\n  background: #3AAA64;\r\n  color: #fff;\r\n}\r\n.latest .featured-image .ribbon {\r\n  position: absolute;\r\n  top: -4px;\r\n  right: -4px;\r\n  width: 110px;\r\n  height: 110px;\r\n  overflow: hidden;\r\n}\r\n.latest .featured-image .ribbon .text {\r\n  font-family: 'Montserrat', sans-serif;\r\n  position: relative;\r\n  left: -8px;\r\n  top: 18px;\r\n  width: 158px;\r\n  padding: 10px 10px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  background-color: #479FC8;\r\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\r\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\r\n}\r\n.latest .featured-image .ribbon .text:before,\r\n.latest .featured-image .ribbon .text:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -5px;\r\n  border-top: 5px solid #276582;\r\n  border-left: 5px solid transparent;\r\n  border-right: 5px solid transparent;\r\n}\r\n.latest .featured-image .ribbon .text:before {\r\n  left: 0;\r\n}\r\n.latest .featured-image .ribbon .text:after {\r\n  right: 0;\r\n}\r\n/* Projects Section */\r\n.projects .item {\r\n  margin-bottom: 30px;\r\n}\r\n.projects .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  line-height: 1.5;\r\n}\r\n.projects .item .title a {\r\n  color: #778492;\r\n}\r\n.projects .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n/* Work Section */\r\n.experience .item {\r\n  margin-bottom: 30px;\r\n}\r\n.experience .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n  margin-bottom: 5px;\r\n  line-height: 1.5;\r\n}\r\n.experience .item .title .place {\r\n  color: #999;\r\n  font-weight: normal;\r\n}\r\n.experience .item .title .place a {\r\n  color: #999;\r\n}\r\n.experience .item .title .place a:hover {\r\n  color: #666666;\r\n}\r\n.experience .item .title .year {\r\n  color: #999;\r\n  font-weight: normal;\r\n}\r\n/* Git section */\r\n.github-graph {\r\n  margin-bottom: 30px;\r\n}\r\n.github-graph .js-calendar-graph-svg {\r\n  max-width: 100%;\r\n}\r\n.ghfeed {\r\n  height: 600px;\r\n}\r\n.ghfeed,\r\n.ghfeed *,\r\n.ghfeed *:before,\r\n.ghfeed *:after {\r\n  box-sizing: content-box;\r\n}\r\n/* Info Section */\r\n.info .fa {\r\n  margin-right: 15px;\r\n  color: #ccd1d6;\r\n}\r\n.info .fa.fa-envelope-o {\r\n  font-size: 14px;\r\n}\r\n.info ul {\r\n  margin-bottom: 0;\r\n}\r\n.info li {\r\n  margin-bottom: 15px;\r\n}\r\n.info li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n/* Skills Section */\r\n.skills .intro {\r\n  margin-bottom: 30px;\r\n}\r\n.skills .skillset .item {\r\n  margin-bottom: 30px;\r\n}\r\n.skills .skillset .level-title {\r\n  font-size: 16px;\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n}\r\n.skills .skillset .level-title .level-label {\r\n  color: #ccd1d6;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.skills .skillset .level-bar {\r\n  height: 15px;\r\n  background: #e8e8e8;\r\n}\r\n.skills .skillset .level-bar-inner {\r\n  height: 15px;\r\n  background: #66cb8c;\r\n}\r\n/* Testimonials section */\r\n.testimonials .item {\r\n  margin-bottom: 30px;\r\n}\r\n.testimonials .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.testimonials .item .quote {\r\n  color: #666;\r\n  font-size: 16px;\r\n  border-left-color: #9fdeb7;\r\n  margin-bottom: 15px;\r\n}\r\n.testimonials .item .quote .fa {\r\n  color: #79d19a;\r\n  margin-right: 15px;\r\n}\r\n.testimonials .item .source {\r\n  font-size: 14px;\r\n  padding-left: 30px;\r\n  font-weight: 500;\r\n}\r\n.testimonials .item .source .name {\r\n  color: #939ea9;\r\n  font-weight: 600;\r\n}\r\n.testimonials .item .source .title {\r\n  color: #999;\r\n}\r\n/* Education section */\r\n.education .item {\r\n  margin-bottom: 30px;\r\n}\r\n.education .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.education .item .title {\r\n  font-size: 16px;\r\n  margin-top: 0;\r\n}\r\n.education .item .university {\r\n  font-family: \"Lato\", arial, sans-serif;\r\n  font-size: 13px;\r\n  color: #999;\r\n  font-weight: 600;\r\n  padding-left: 25px;\r\n}\r\n.education .item .university .year {\r\n  color: #b0b7bf;\r\n  font-weight: 500;\r\n}\r\n/* Language Section */\r\n.languages .item {\r\n  margin-bottom: 15px;\r\n}\r\n.languages .item .title {\r\n  color: #778492;\r\n}\r\n.languages .item .level {\r\n  color: #999;\r\n}\r\n.languages .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.languages .item .fa {\r\n  color: #79d19a;\r\n}\r\n/* Blog Section */\r\n.blog .item {\r\n  margin-bottom: 30px;\r\n}\r\n.blog .item .title {\r\n  font-size: 18px;\r\n  line-height: 1.3;\r\n}\r\n.blog .item .title a {\r\n  color: #778492;\r\n}\r\n.blog .item .title a:hover {\r\n  color: #5f6b77;\r\n}\r\n.blog .item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n/* List section */\r\n.list ul li {\r\n  margin-bottom: 10px;\r\n}\r\n.list ul li .fa {\r\n  margin-right: 5px;\r\n}\r\n.list ul li a {\r\n  color: #778492;\r\n}\r\n.list ul li a:hover {\r\n  color: #49515a;\r\n}\r\n/* Credits */\r\n.credits ul li {\r\n  margin-bottom: 10px;\r\n}\r\n.credits ul li .fa {\r\n  margin-right: 5px;\r\n}\r\n.credits ul li a {\r\n  color: #778492;\r\n}\r\n.credits ul li a:hover {\r\n  color: #49515a;\r\n}\r\n.credits .btn {\r\n  margin-bottom: 15px;\r\n}\r\n/* ======= Footer ======= */\r\n.footer {\r\n  background: #32383e;\r\n  color: #fff;\r\n  padding: 10px 0;\r\n}\r\n.footer .copyright {\r\n  line-height: 1.6;\r\n  color: #a1aab4;\r\n  font-size: 14px;\r\n}\r\n.footer a {\r\n  color: #fff;\r\n}\r\n.footer .fa-heart {\r\n  color: #fb866a;\r\n}\r\n/* Extra small devices (phones, less than 768px) */\r\n@media (max-width: 767px) {\r\n  .header {\r\n    text-align: center;\r\n  }\r\n  .header .profile-image {\r\n    float: none !important;\r\n    margin: 0 auto;\r\n  }\r\n  .header .profile-content {\r\n    float: none !important;\r\n    text-align: center;\r\n  }\r\n  .header .btn {\r\n    margin-top: 30px;\r\n    float: none !important;\r\n  }\r\n  .project-image {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n/* Small devices (tablets, 768px and up) */\r\n/* Medium devices (desktops, 992px and up) */\r\n/* Large devices (large desktops, 1200px and up) */\r\n/* Ex-Large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1400px) {\r\n  .container {\r\n    width: 1360px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map