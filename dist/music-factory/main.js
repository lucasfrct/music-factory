(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\music-factory\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular2_materialize_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-materialize-v1 */ "fNg7");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.service */ "UdUg");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "TGkX");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list.component */ "uMRu");
/* harmony import */ var _playbar_playbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playbar/playbar.component */ "dG5T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class HomeComponent {
    constructor(angular2MaterializeService, cacheService) {
        this.mockUser = {
            name: "lucasfrct",
            seartchs: ['album dt', 'fernanda brum'],
            librariees: [],
            playlists: [],
            podcasts: [],
            artistis: [],
            albuns: [],
            favorites: [],
            currentAudio: {},
            currentAudioList: [],
            sesseionAudioList: []
        };
        this.materialize = angular2MaterializeService;
        this.cache = cacheService;
    }
    loadChace() {
        let username = "lucasfrct";
        this.user = this.cache.get(username);
        console.log("User: ", this.user);
    }
    ngOnInit() {
        this.loadChace();
    }
    ngAfterViewInit() {
        this.materialize.autoInit();
        // NOTE - autoInit() only works on the currently loaded items in view
        // this.materialize.dismissAllToasts();
        // const instance(s) = this.materialize.initAutocomplete('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCarousel('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCharacterCount('#id, .class, element', {options});
        // const instance(s) = this.materialize.initChips('#id, .class, element', {options});
        // const instance(s) = this.materialize.initCollapsible('#id, .class, element', {options});
        // const instance(s) = this.materialize.initDatePicker('#id, .class, element', {options});
        // const instance(s) = this.materialize.initDropdown('#id, .class, element', {options});
        // const instance(s) = this.materialize.initFloatingActionButton('#id, .class, element', {options});
        // const instance(s) = this.materialize.initMaterialboxed('#id, .class, element', {options});
        // const instance(s) = this.materialize.initModal('#id, .class, element', {options});
        // const instance(s) = this.materialize.initParallax('#id, .class, element', {options});
        // const instance(s) = this.materialize.initPushpin('#id, .class, element', {options});
        // const instance(s) = this.materialize.initScrollSpy('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSelect('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSidenav('#id, .class, element', {options});
        // const instance(s) = this.materialize.initSlider('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTabs('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTapTarget('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTimepicker('#id, .class, element', {options});
        // const instance(s) = this.materialize.initTooltip('#id, .class, element', {options});
        // const instance = this.materialize.toast({options});
        // this.materialize.textareaAutoResize();
        // this.materialize.updateTextFields();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_materialize_v1__WEBPACK_IMPORTED_MODULE_1__["Angular2MaterializeV1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [["id", "home", 1, ""], [1, "row", "row-flex"], [1, "col", "s1", "m1", "l4", "xl3"], [1, "col", "s11", "m11", "l8", "xl9"], [1, "col", "s12", "m12", "l12", "xl12"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-playbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _playbar_playbar_component__WEBPACK_IMPORTED_MODULE_5__["PlaybarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["#home[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUsICNob21lID4gKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MenuComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function MenuComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r5.name);
} }
function MenuComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function MenuComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r7.name);
} }
class MenuComponent {
    constructor() {
        this.menu = {
            icon: "menu",
            logoUrl: "assets/images/logo.png",
            items: [
                { name: "Início", icon: 'home' },
                { name: "Descobrir", icon: 'search' },
                { name: "Sua Biblioteca", icon: 'library_books' }
            ],
            playlists: [
                { name: "Criar Playlist", icon: 'add_box' },
                { name: "Mais tocadas", icon: 'favorite' },
            ]
        };
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 26, vars: 7, consts: [["id", "menu", 1, "row", "row-flex"], [1, "background-primary"], ["data-target", "slide-out", 1, "sidenav-trigger", "show-on-medium-and-down"], [1, "material-icons"], [1, "hide-on-med-and-down"], [1, "not-hover", "menu-logo"], ["id", "menu-logo", 1, "circle", 3, "src"], [4, "ngFor", "ngForOf"], [1, "line-divider"], [1, "not-hover"], [1, "subheader"], ["id", "slide-out", 1, "background-primary", "sidenav"], [1, "not-hover", "user-view"], [1, "circle", 3, "src"], [1, "waves-effect"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Music Factory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_li_11_Template, 5, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PLAYLISTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuComponent_li_16_Template, 5, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MenuComponent_li_20_Template, 5, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PLAYLISTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MenuComponent_li_25_Template, 5, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.menu.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.menu.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.playlists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.menu.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.playlists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#menu[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    color: #FFFFFF;\r\n    width: auto;\r\n    min-height: 64px;\r\n    background-color: transparent;\r\n    margin: 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n    height: auto !important;\r\n    height: 100%;\r\n    min-height: 64px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: none;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: none;\r\n    padding: 0px 16px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child)    > *[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li.line-divider[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: solid 1px rgba(255,255,255,0.15);\r\n    margin: 16px 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover:not(.not-hover), #menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:focus:not(.not-hover) {\r\n    background-color: rgba(255,255,255,0.16);\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0 16px 0 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   .menu-logo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    vertical-align: top;\r\n    align-items: center;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   #menu-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 12px 16px 4px 0;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n    background-color: #323232 !important;\r\n    border-color: #323232 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZW51IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNtZW51ICoge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbiNtZW51IG5hdiB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbiNtZW51IG5hdiA+ICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuI21lbnUgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNtZW51IHVsID4gKiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbn1cclxuXHJcbiNtZW51IHVsID4gKjpub3QoOmZpcnN0LWNoaWxkKSA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbWVudSB1bCA+IGxpLmxpbmUtZGl2aWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4jbWVudSB1bCA+IGxpOmhvdmVyOm5vdCgubm90LWhvdmVyKSwgXHJcbiNtZW51IHVsID4gbGk6Zm9jdXM6bm90KC5ub3QtaG92ZXIpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNik7XHJcbn1cclxuXHJcbiNtZW51IHVsIGkge1xyXG4gICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG59XHJcblxyXG4jbWVudSAubWVudS1sb2dvID4gKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbWVudSAjbWVudS1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMTJweCAxNnB4IDRweCAwO1xyXG59XHJcblxyXG4jbWVudSAuZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "UdUg":
/*!***************************************!*\
  !*** ./src/app/home/cache.service.ts ***!
  \***************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CacheService {
    constructor() {
        this.storage = window.localStorage;
    }
    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        return true;
    }
    get(key) {
        let data = this.storage.getItem(key);
        return JSON.parse(data);
    }
    remove(key) {
        this.storage.removeItem(key);
        return true;
    }
    clear() {
        this.storage.clear();
        return true;
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
CacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _playbar_playbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playbar/playbar.component */ "dG5T");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "uMRu");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _playbar_playbar_component__WEBPACK_IMPORTED_MODULE_7__["PlaybarComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]] }); })();


/***/ }),

/***/ "dG5T":
/*!**********************************************!*\
  !*** ./src/app/playbar/playbar.component.ts ***!
  \**********************************************/
/*! exports provided: PlaybarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybarComponent", function() { return PlaybarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");


class PlaybarComponent {
    constructor() {
        this.timeline = 0;
    }
    pictureManip(value) {
        console.log("VALUE", value);
    }
    formatLabel(value) {
        if (value >= 0) {
            return Math.round(value / 1) + 's';
        }
        return value;
    }
    ngOnInit() {
    }
}
PlaybarComponent.ɵfac = function PlaybarComponent_Factory(t) { return new (t || PlaybarComponent)(); };
PlaybarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaybarComponent, selectors: [["app-playbar"]], decls: 30, vars: 2, consts: [["id", "playbar", 1, "row", "background-terciary"], [1, "col", "s3"], [1, "col", "s6"], ["id", "player"], [1, "controls"], [1, "material-icons"], [1, "display"], ["thumbLabel", "", "tickInterval", "100", "min", "1", "max", "100", 1, "displaytime", 3, "displayWith", "change"], [1, "volume"], ["thumbLabel", "", "tickInterval", "100", "min", "1", "max", "100", 1, "volume-value", 3, "displayWith", "change"], [1, "list"]], template: function PlaybarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "shuffle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "skip_previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "play_circle_filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "skip_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlaybarComponent_Template_mat_slider_change_18_listener($event) { return ctx.pictureManip($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "playlist_play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "volume_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlaybarComponent_Template_mat_slider_change_28_listener($event) { return ctx.pictureManip($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSlider"]], styles: ["#playbar[_ngcontent-%COMP%] {\r\n    height: 56px;\r\n    color: #FFF;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXliYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiIiwiZmlsZSI6InBsYXliYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwbGF5YmFyIHtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */", "#player[_ngcontent-%COMP%] {\r\n    max-width: 480px;\r\n    min-width: 90px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 4px;\r\n    -webkit-user-select: none;             \r\n    user-select: none; \r\n}\r\n\r\n#player[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, #player[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:focus {\r\n    color: gray;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .controls[_ngcontent-%COMP%], #player[_ngcontent-%COMP%]    > .display[_ngcontent-%COMP%], #player[_ngcontent-%COMP%]    > .volume[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .controls[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(5, 32px) ;\r\n    grid-template-rows: auto;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:nth-child(3)) {\r\n    transform: scale(0.5);\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .display[_ngcontent-%COMP%] {\r\n    grid-template-columns: 30px 1fr 30px;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .display[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:nth-child(2)) {\r\n    transform: scale(0.5);\r\n}\r\n\r\n#player[_ngcontent-%COMP%]   .display-time[_ngcontent-%COMP%] {\r\n    min-width: 180px;\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .volume[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 32px 32px 1fr;\r\n    width: 160px;\r\n    float: right;\r\n    padding: 4px;\r\n    transform: scale(0.7);\r\n}\r\n\r\n#player[_ngcontent-%COMP%]    > .volume[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    transform: scale(0.95);\r\n}\r\n\r\n#player[_ngcontent-%COMP%]   .volume-value[_ngcontent-%COMP%] {\r\n    min-width: 60px;\r\n}\r\n\r\nmat-slider[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 18px;\r\n}\r\n\r\n  mat-slider > * {\r\n    padding: -0 !important;\r\n    margin: -16px 0 0 0 !important;\r\n    position: relative;\r\n}\r\n\r\n  .mat-accent .mat-slider-thumb {\r\n    background-color: #FFF !important;\r\n}\r\n\r\n  .mat-accent .mat-slider-thumb-label {\r\n    background-color: rgba(127,127,127,0.9);\r\n}\r\n\r\n  .mat-accent .mat-slider-track-background,   .mat-accent .mat-slider-track-background:hover,   .mat-accent .mat-slider-track-background:focus {\r\n    background-color: rgba(255,255,255, 0.3) !important;\r\n}\r\n\r\n  .mat-accent .mat-slider-track-fill {\r\n    background-color: #FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCLEdBQUcsNEJBQTRCLE1BQzVCLGdCQUFnQixPQUNoQixXQUFXO0lBQ3ZDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0E7SUFDSSx1Q0FBdUM7SUFDdkMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTs7O0lBR0ksbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InBsYXllci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGxheWVyIHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggYWxsICovXHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogSUUgMTArICovXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgXHJcbn1cclxuXHJcbiNwbGF5ZXIgaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNwbGF5ZXIgaTpob3ZlcixcclxuI3BsYXllciBpOmZvY3VzIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jcGxheWVyID4gLmNvbnRyb2xzLFxyXG4jcGxheWVyID4gLmRpc3BsYXksXHJcbiNwbGF5ZXIgPiAudm9sdW1lIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4jcGxheWVyID4gLmNvbnRyb2xzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDMycHgpIDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxufVxyXG5cclxuI3BsYXllciA+IC5jb250cm9scyA+ICo6bm90KDpudGgtY2hpbGQoMykpIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxufVxyXG5cclxuI3BsYXllciA+IC5kaXNwbGF5IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnIgMzBweDtcclxufVxyXG5cclxuI3BsYXllciA+IC5kaXNwbGF5ID4gKjpub3QoOm50aC1jaGlsZCgyKSkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG59XHJcblxyXG4jcGxheWVyIC5kaXNwbGF5LXRpbWUge1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxufVxyXG5cclxuI3BsYXllciA+IC52b2x1bWUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCAzMnB4IDFmcjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5cclxuI3BsYXllciA+IC52b2x1bWUgPiBpIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbiNwbGF5ZXIgLnZvbHVtZS12YWx1ZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBtYXQtc2xpZGVyID4gKiB7XHJcbiAgICBwYWRkaW5nOiAtMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAtMTZweCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuOjpuZy1kZWVwIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LDEyNywxMjcsMC45KTtcclxufSBcclxuXHJcbjo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZDpob3ZlcixcclxuOjpuZy1kZWVwIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC4zKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59ICJdfQ== */"] });


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardComponent {
    constructor() {
        this.list = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    cardClick(card) {
        console.log("CLICK card: ", card);
        console.log("CLICK card: ", card.preview);
        let au = new Audio(card.preview);
        au.play();
        setTimeout(() => { au.pause(); }, 3000);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, outputs: { list: "list" }, decls: 8, vars: 5, consts: [["id", "card", 1, "", 3, "click"], ["alt", "", 1, "circle", "responsive-img", 3, "src"], [1, "truncate"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_0_listener() { return ctx.cardClick(ctx.card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.album.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.album.title, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.album.release_date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.card.artist.name, " - ", ctx.card.album.type, "");
    } }, styles: ["#card[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 216px;\r\n    padding: 16px;\r\n    border: solid 1px #000;\r\n    background-color: rgba(255,255,255, 0.05);\r\n    display: grid;\r\n    grid-template-rows: 1fr 24px 16px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: left;\r\n    display: inline-block;\r\n    margin: 4px;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]:hover, #card[_ngcontent-%COMP%]:focus {\r\n    border: solid 1px rgba(255,255,255, 0.2);\r\n    background-color: rgba(255,255,255, 0.1);\r\n}\r\n\r\n#card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(img) {\r\n    font-size: 0.8rem;\r\n    padding: 2px;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 120px;\r\n    min-height: 136px;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\r\n    padding: 0 0  16px 0;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\r\n    font-size: 0.75rem;\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBOztJQUVJLHdDQUF3QztJQUN4Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMjE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMDUpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI0cHggMTZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuI2NhcmQ6aG92ZXIsXHJcbiNjYXJkOmZvY3VzIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjEpO1xyXG59XHJcblxyXG4jY2FyZCA+ICo6bm90KGltZykge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiNjYXJkIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTM2cHg7XHJcbn1cclxuXHJcbiNjYXJkID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgIDE2cHggMDtcclxufVxyXG5cclxuI2NhcmQgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "uMRu":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.service */ "yhJ+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");




function ListComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2.name);
} }
function ListComponent_app_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 9);
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", car_r3);
} }
class ListComponent {
    constructor(listService) {
        this.list = [];
        this.categories = [
            { name: "Playlist", actions: [] },
            { name: "Podcasts", actions: [] },
            { name: "Artistas", actions: [] },
            { name: "Álbuns", actions: [] },
        ];
        this.service = listService;
    }
    ngOnInit() {
        let that = this;
        this.service.search("rock").subscribe((data) => {
            that.list = data.data;
            console.log("INIT Search: ", data);
        });
    }
    search(input) {
        let that = this;
        this.service.search(input.value).subscribe((data) => {
            that.list = data.data;
            console.log("RUN Search: ", input.value, data);
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 19, vars: 2, consts: [["id", "list", 1, "background-secoundary"], [1, "list-bar", "background-terciary"], [1, "material-icons"], ["name", "search", "type", "search", "placeholder", "Digite...", 3, "change"], [4, "ngFor", "ngForOf"], [1, "list-account"], [1, "list-content"], [1, "list-title"], [3, "card", 4, "ngFor", "ngForOf"], [3, "card"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ListComponent_Template_input_change_7_listener($event) { return ctx.search($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_li_9_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "lucasfrct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Artistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_app_card_18_Template, 1, 1, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: ["#list[_ngcontent-%COMP%] {\r\n    min-height: 120px;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #FFF; \r\n    max-height: calc(100vh - 56px) !important; \r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 28px 28px 200px 1fr 80px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    text-align: center;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    -webkit-user-select: none;             \r\n    user-select: none;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    transform: scale(0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, #list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:focus, #list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover, #list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:focus {\r\n    color: gray;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    padding: 4px 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-account[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-account[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    margin: 0 4px;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%]  {\r\n    padding: 8px 16px;\r\n    display: block;\r\n    overflow-y: auto;\r\n    max-height: calc(100% - 56px);\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   .list-content[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n#list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: #767676;\r\n    height: 28px;\r\n    padding: 8px 12px;\r\n    margin: 0;\r\n    background-color: #FFF;\r\n    border-radius: 8px;\r\n    box-sizing: border-box;\r\n    width: calc(100% - 16px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUMsRUFBRSxtQkFBbUI7QUFDbEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIseUJBQXlCLEdBQUcsNEJBQTRCLE1BQzVCLGdCQUFnQixPQUNoQixXQUFXO0lBQ3ZDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBOzs7O0lBSUksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNGRkY7IFxyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpICFpbXBvcnRhbnQ7IC8qIDU2cHggPSBwbGF5IGJhciovXHJcbn1cclxuXHJcbiNsaXN0IC5saXN0LWJhciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOHB4IDI4cHggMjAwcHggMWZyIDgwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IGFsbCAqL1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIElFIDEwKyAqL1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNsaXN0IC5saXN0LWJhciA+IGkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGlzdCAubGlzdC1iYXIgaTpob3ZlcixcclxuI2xpc3QgLmxpc3QtYmFyIGk6Zm9jdXMsIFxyXG4jbGlzdCB1bCA+IGxpOmhvdmVyLFxyXG4jbGlzdCB1bCA+IGxpOmZvY3VzIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jbGlzdCAubGlzdC1iYXIgPiB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNsaXN0IC5saXN0LWJhciA+IHVsID4gbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2xpc3QgLmxpc3QtYWNjb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jbGlzdCAubGlzdC1hY2NvdW50ID4gKiB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG59XHJcblxyXG4jbGlzdCAubGlzdC1jb250ZW50ICB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDU2cHgpO1xyXG59XHJcblxyXG4jbGlzdCAubGlzdC1jb250ZW50IC5saXN0LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNsaXN0IGlucHV0IHtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yhJ+":
/*!**************************************!*\
  !*** ./src/app/list/list.service.ts ***!
  \**************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ListService {
    constructor(http) {
        this.http = http;
        this.endpoint = "deezer/"; //  endpoint: https://api.deezer.com/
    }
    album(number = 302127) {
        let resource = String("album/" + number);
        return this.http.get(this.endpoint + resource);
    }
    search(value) {
        let resource = String("search?q=" + value);
        return this.http.get(this.endpoint + resource);
    }
}
ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListService, factory: ListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map