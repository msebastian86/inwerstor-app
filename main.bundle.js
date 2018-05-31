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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\" class=\"container\">\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<h1>{{title}} <i class=\"fa fa-money\" aria-hidden=\"true\" style=\"color: green;\"></i></h1>\r\n\t\t\t<p><strong>Cena zakupu:</strong> <input [(ngModel)]=\"cenaZakupu\" /></p>\r\n\t\t\t<p><strong>Wkład własny:</strong> <input [(ngModel)]=\"wkladWlasny\" (ngModelChange)=\"changeWkladWlasny($event)\" type=\"number\"/></p>\r\n\t\t\t<p><strong>Wkład własny wyrażony procentowo:</strong> <span *ngIf=\"wkladWlasny\">{{(wkladWlasny/cenaZakupu | percent: \"1.1-2\")}}</span></p>\r\n\t\t\t<p><strong>Kwota kredytu:</strong> <span [innerText]=\"kwotaKredytu()\"></span></p>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mb-4\">\r\n\t\t<div class=\"col-md-6 col-lg-7\">\r\n\t\t\t<div class=\"jumbotron high\">\r\n\r\n\t\t\t\t<h3 class=\"mb-4\">Wybierz na jakim rynku kupujesz</h3>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t\r\n\t\t\t\t<div>\r\n\t\t\t\t    <div class=\"form-check form-check-inline\">\r\n\t\t\t\t    \t<input class=\"form-check-input\" id=\"rynek_p\" type=\"radio\" [(ngModel)]=\"rynekZakupu\" name=\"rynekZakupu\" value=\"rynek_pierwotny\">\r\n\t\t\t\t    \t<label class=\"form-check-label\" for=\"rynek_p\">Rynek pierwotny</label>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"form-check form-check-inline\">\r\n\t\t\t\t    \t<input class=\"form-check-input\" id=\"rynek_w\" type=\"radio\" [(ngModel)]=\"rynekZakupu\" name=\"rynekZakupu\" value=\"rynek_wtorny\">\r\n\t\t\t\t    \t<label class=\"form-check-label\" for=\"rynek_w\">Rynek wtórny</label>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n\r\n\t\t    \t<h5 *ngIf=\"rynekZakupu=='rynek_pierwotny'\">Koszty na rynku pierwotnym</h5>\r\n\t\t\t\t<h5 *ngIf=\"rynekZakupu=='rynek_wtorny'\">Koszty na rynku Wtórnym</h5>\r\n\r\n\r\n\t\t\t\t<div *ngIf=\"rynekZakupu=='rynek_pierwotny'\">\r\n\t\t\t\t\t<p [innerText]=\"'Notariusz: '+ kosztNotariusz()\"></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div *ngIf=\"rynekZakupu=='rynek_wtorny'\">\r\n\t\t\t\t\t<p [innerText]=\"'Notariusz: '+ kosztNotariusz()\"></p>\r\n\t\t\t\t\t<p>Podatek pcc: {{cenaZakupu*0.02}}</p>\r\n\t\t\t\t\t<p>Prowizja Agencji: <input [(ngModel)]=\"prowizjaAgencji\" type=\"number\" value=\"1\" min=\"0\" max=\"10\" style=\"width:40px;\" />% = <span *ngIf=\"prowizjaAgencji\">{{cenaZakupu*(prowizjaAgencji/100)}}</span></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<h3 class=\"mb-4\">Kredyt</h3>\r\n\t\t\t\t<hr/>\r\n\r\n\t\t\t\t<p>Prowizja banku: <input [(ngModel)]=\"prowizjaBanku\" (ngModelChange)=\"changeProwizjaBanku($event)\" type=\"number\" value=\"1\" min=\"0\" max=\"10\" style=\"width:40px;\"/>% = {{cenaZakupu*(prowizjaBanku/100)}}</p>\r\n\t\t\t\t<p>Marża banku: <input [(ngModel)]=\"marzaBanku\" type=\"number\" value=\"1\" min=\"0\" max=\"10\" style=\"width:40px;\" />%</p>\r\n\t\t\t\t<p>Ilość lat kredytu: <input [(ngModel)]=\"lataKredytu\" type=\"number\" value=\"30\" min=\"1\" max=\"35\" style=\"width:40px;\" /> lat</p>\r\n\r\n\r\n\t\t\t\t<p>Orientacyjna wysokość raty: <strong [innerText]=\"rataKredytu()\"></strong> /miesięcznie, <strong>{{lataKredytu*12}}</strong> rat</p>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-6 col-lg-5\">\r\n\t\t\t<div class=\"jumbotron high alert alert-warning\">\r\n\t\t\t\t<h3 class=\"mb-4\">Koszty:</h3>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t<h4 class=\"text-left mb-3\">Początkowe: <span class=\"badge badge-primary badge-pill\">{{kosztyTotal}}</span></h4>\r\n\r\n\t\t\t\r\n\r\n\t\t\t\t<h4 class=\"text-left mb-3\">Stałe:</h4>\r\n\t\t\t\t\r\n\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t    Miesięczna rata\r\n\t\t\t\t    <span class=\"badge badge-primary badge-pill\" [innerText]=\"rataKredytu()\"></span>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n\t\t\t\t    Ubezpieczenia\r\n\t\t\t\t    <span class=\"badge badge-primary badge-pill\">xxx</span>\r\n\t\t\t\t  </li>\r\n\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mb-4\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron high alert alert-success\">\r\n\r\n\t\t\t\t<h3 class=\"mb-4\">Zwrot z inwestycji <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i></h3>\r\n\t\t\t\t<hr/>\r\n\r\n\t\t\t\t<p>Szacunkowy dochód z najmu: xxx</p>\r\n\t\t\t\t<p>Szacunkowy zysk miesięczny z najmu: xxx</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<img src=\"https://media.giphy.com/media/bCqgz0UqNCeOc/giphy.gif\" alt=\"\" class=\"center-block\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Investor App';
        this.cenaZakupu = 243000;
        this.rynekZakupu = '';
        this.wkladWlasny = 77000;
        this.prowizjaBanku = 2;
        this.marzaBanku = 1.8;
        this.lataKredytu = 30;
        this.oprocentowanieWibor = 2;
        this.kosztyTotal = this.wkladWlasny + (this.cenaZakupu * (this.prowizjaBanku / 100));
    }
    AppComponent.prototype.kwotaKredytu = function () {
        this.kredytKwota = this.cenaZakupu - this.wkladWlasny;
        return this.kredytKwota;
    };
    AppComponent.prototype.changeWkladWlasny = function (val) {
        this.wkladWlasny = val;
        this.kosztyTotal = val + (this.cenaZakupu * (this.prowizjaBanku / 100));
    };
    AppComponent.prototype.changeProwizjaBanku = function (val) {
        this.prowizjaBanku = val;
        this.kosztyTotal = this.wkladWlasny + (this.cenaZakupu * (val / 100));
    };
    AppComponent.prototype.kosztNotariusz = function () {
        // TODO
        return 2000;
    };
    AppComponent.prototype.rataKredytu = function () {
        var oprocentowanie = (this.oprocentowanieWibor + this.marzaBanku) / 100;
        var q = Math.pow(1 + oprocentowanie / 12, this.lataKredytu * 12);
        var rata = this.kredytKwota * q * ((1 + oprocentowanie / 12 - 1) / (q - 1));
        return rata.toFixed(2);
        // return miesiaceKredytu;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__globals_service__["a" /* GlobalsService */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/globals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalsService = (function () {
    function GlobalsService() {
    }
    return GlobalsService;
}());
GlobalsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GlobalsService);

//# sourceMappingURL=globals.service.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map