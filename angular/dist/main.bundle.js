webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #F2F2F7;\n    min-height: 95%;\n}"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var getRandomItem = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
var names = [
    "Fausto Dittrich",
    "Alethea Mckechnie",
    "Carlos Dewoody",
    "Euna Broady",
    "Dorthea Wiren",
    "Seymour Emily",
    "Augusta Zwart",
    "Mavis Judkins",
    "Carol Parsley",
    "Al Valero"
];
var logonTimes = ['01:12:34', '03:23:56', '12:19:18', '13:38:45', '19:22:39'];
var clients = ['Windows 10', 'Windows XP', 'Windows Vista', 'OSX', 'Linux'];
var statuses = ['Active', 'Inactive'];
var servers = ['Rudolf', 'The Little General', 'Cookie Monster'];
var sessionTypes = ['Outlook', 'Web', 'Mobile'];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.user = 'Global SuperAdmin';
        this.companies = ['Company X', 'Company Y'];
        this.links = [
            {
                name: 'Dashboard',
                icon: 'fas fa-columns'
            },
            {
                name: 'Users',
                icon: 'fas fa-user'
            },
            {
                name: 'Apps',
                icon: 'fab fa-windows'
            },
            {
                name: 'Sessions',
                icon: 'fas fa-share-alt'
            },
            {
                name: 'Groups',
                icon: 'fas fa-users'
            },
            {
                name: 'Documents',
                icon: 'far fa-file-alt'
            }
        ];
        this.sessions = names.map(function (name) { return ({
            name: name,
            status: getRandomItem(statuses),
            logonTime: getRandomItem(logonTimes),
            client: getRandomItem(clients),
            server: getRandomItem(servers),
            sessionType: getRandomItem(sessionTypes)
        }); });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            styles: [__webpack_require__("./src/app/app.component.css")],
            template: "\n        <div class=\"app-container\">\n            <cm-header [companies]=\"companies\" [user]=\"user\"></cm-header>\n            <div class=\"container\">\n                <navigation [links]=\"links\"></navigation>\n                <session-view [sessions]=\"sessions\"></session-view>\n            </div>\n        </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_session_view_component__ = __webpack_require__("./src/app/session/session-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_session_table_component__ = __webpack_require__("./src/app/session/session-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__session_session_view_component__["a" /* SessionViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__session_session_table_component__["a" /* SessionTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header {\n    background: #FDFDFE;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.logo {\n    background: #344750;\n    text-align: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.header-content {\n    padding: 0 4rem;\n    -webkit-box-flex: 7;\n        -ms-flex: 7;\n            flex: 7;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align:  center;\n        -ms-flex-align:  center;\n            align-items:  center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    line-height: 2em;\n}\n.header-company-controls > *,\n.header-user-controls > * {\n    margin: 0 0.5rem;\n}\n.header-user-controls .user-icon {\n    font-size: xx-large;\n}"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], HeaderComponent.prototype, "companies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cm-header',
            styles: [__webpack_require__("./src/app/header/header.component.css")],
            // templateUrl: './header.component.html',
            template: "\n        <header>\n            <div class=\"logo left-column\">\n                <img src=\"assets/cloudMaker-logo-2.png\" width=\"100px\"/>\n            </div>\n            <div class=\"header-content\">\n                <div class=\"header-company-controls\">\n                    <i class=\"fas fa-briefcase\"></i>\n                    <select>\n                        <option *ngFor=\"let company of companies\">{{company}}</option>\n                    </select>\n                </div>\n                <div class=\"header-user-controls\">\n                    <i class=\"fas fa-user-circle user-icon\"></i>\n                    <span>{{user}}</span>\n                    <i class=\"fas fa-cog\"></i>\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                </div>\n            </div>\n        </header>\n    "
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "\n:host {\n    background: #243238;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.nav-list {\n    list-style: none;\n    padding: 0;\n}\n.nav-item {\n    padding: 0.9rem 1.4rem;\n}\n.nav-item.selected, .nav-item:hover {\n    background: #344750;\n}\n.nav-icon {\n    width: 1.7rem;\n    opacity: 0.4;\n}\n.nav-item.selected .nav-icon {\n    color: #0092DC;\n    opacity: 1;\n}\n.nav-link {\n    color: #6D7E87;\n    text-decoration: none;\n}\n.nav-item.selected .nav-link  {\n    color: #FFFFFF;\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.isSelected = function (link) {
        return link.name === 'Sessions';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], NavigationComponent.prototype, "links", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'navigation',
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")],
            template: "\n        <nav class=\"left-column\">\n            <ul class=\"nav-list\">\n                <li *ngFor=\"let link of links\" [ngClass]=\"{'selected': isSelected(link) }\" class=\"nav-item\" >\n                    <i class=\"nav-icon {{link.icon}}\"></i>\n                    <a class=\"nav-link\">{{link.name}}</a>\n                </li>\n            </ul>\n        </nav>\n    "
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/session/session-table.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    max-width: 100%;\n}\ntable th,\ntable td {\n    text-align: left;\n    padding: 0.7rem 0;\n    margin: 0;\n}\ntable thead th {\n    border-bottom: 1px solid #bbc5ca;\n    color: #243137;\n}\ntable thead .table-header-sort-icons {\n    display: inline-block;\n    position: relative;\n    bottom: -0.4rem;\n    margin-left: 0.8rem;\n    height: 100%;\n}\ntable thead .table-header-sort-icons i {\n    position: relative;\n    display: block;\n}\ntable thead .table-header-sort-icons i:first-of-type {\n    bottom: -0.3rem;\n}\ntable thead th.sorted .table-header-sort-icons i {\n    color: #243137;\n}\ntable thead th.sorted .table-header-sort-icons i:first-of-type {\n    visibility: hidden;\n}\ntable tbody > tr:nth-child(odd) > td {\n    background-color: #f5f5f5;\n}\ntable td {\n    padding-left: 0.3rem;\n    font-size: 0.9rem;\n}\ntable td.actions {\n    text-align: right;\n}\ntable td.actions > * {\n    margin: 0 0.5rem;\n}"

/***/ }),

/***/ "./src/app/session/session-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionTableComponent = /** @class */ (function () {
    function SessionTableComponent() {
        this.headings = ['Name', 'Logon Time', 'Client', 'Status', 'Server', 'Session'];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], SessionTableComponent.prototype, "sessions", void 0);
    SessionTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'session-table',
            styles: [__webpack_require__("./src/app/session/session-table.component.css")],
            template: "\n        <table cellspacing=\"0\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let heading of headings\">\n                    {{heading}}\n                    <div class=\"table-header-sort-icons\">\n                        <i class=\"fas fa-caret-up\"></i>\n                        <i class=\"fas fa-caret-down\"></i>\n                    </div>\n                </th>\n                <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let session of sessions\">\n                <td>{{session.name}}</td>\n                <td>{{session.logonTime}}</td>\n                <td>{{session.client}}</td>\n                <td>{{session.status}}</td>\n                <td>{{session.server}}</td>\n                <td>{{session.sessionType}}</td>\n                <td class=\"actions\">\n                    <i class=\"fas fa-minus-circle\"></i>\n                    <i class=\"fas fa-ellipsis-h\"></i>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    "
        })
    ], SessionTableComponent);
    return SessionTableComponent;
}());



/***/ }),

/***/ "./src/app/session/session-view.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    padding: 2rem 4rem;\n    -webkit-box-flex: 7;\n        -ms-flex: 7;\n            flex: 7;\n}\n\nh1 {\n    color: #243137;\n}\n\n.header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align:  center;\n        -ms-flex-align:  center;\n            align-items:  center;\n}\n\n.header .search-controls > * {\n    margin: 0 0.5rem;\n}\n\n.content {\n    background: #FDFDFE;\n    margin-top: 2rem;\n    padding: 2rem;\n}\n\n.table-pager {\n    margin: 1.5em auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align:  center;\n        -ms-flex-align:  center;\n            align-items:  center;\n}\n\n.table-pager > * {\n    margin: 0 0.4em;\n}\n\n.table-pager select {\n    position: absolute;\n    right: 14em;\n    background: none;\n}\n\n.table-pager-button {\n    border: 2px solid #BBC5CA;\n    padding: 0.2rem 0.8rem;\n    border-radius: 2px;\n}\n\n.table-pager-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.table-pager-list li {\n    display: inline-block;\n    padding: 00.2em 0.6em;\n    border-radius: 2px;\n}\n\n.table-pager-list li.selected {\n    background: #0092DC;\n    color: #FFFFFF;\n}"

/***/ }),

/***/ "./src/app/session/session-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionViewComponent = /** @class */ (function () {
    function SessionViewComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], SessionViewComponent.prototype, "sessions", void 0);
    SessionViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'session-view',
            styles: [__webpack_require__("./src/app/session/session-view.component.css")],
            template: "\n        <main>\n            <section class=\"header\">\n                <div>\n                    <h1>Sessions</h1>\n                    <sub>Manage user Citrix sessions</sub>\n                </div>\n                <div class=\"search-controls\">\n                    <select>\n                        <option>Server</option>\n                    </select>\n                    <input type=\"search\" placeholder=\"Search users...\" />\n                </div>\n            </section>\n            <section class=\"content\">\n                <session-table [sessions]=\"sessions\"></session-table>\n            </section>\n            <section>\n                <div class=\"table-pager\">\n                    <i class=\"fas fa-angle-left table-pager-button\"></i>\n                    <i class=\"fas fa-ellipsis-h\"></i>\n\n                    <ul class=\"table-pager-list\">\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li class=\"selected\">5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                    </ul>\n                    <i class=\"fas fa-ellipsis-h\"></i>\n                    <i class=\"fas fa-angle-right table-pager-button\"></i>\n                    <select>\n                        <option>100 results</option>\n                    </select>\n                </div>\n            </section>\n        </main>\n    "
        })
    ], SessionViewComponent);
    return SessionViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map