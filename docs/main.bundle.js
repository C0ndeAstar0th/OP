webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_calendar__ = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guard_guard__ = __webpack_require__("../../../../../src/app/guard/guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guard_guard2__ = __webpack_require__("../../../../../src/app/guard/guard2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_main_header_header_component__ = __webpack_require__("../../../../../src/app/components/main/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_screens_basic_firstbasic_firstbasic_component__ = __webpack_require__("../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__ = __webpack_require__("../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_screens_basic_finalbasic_finalbasic_component__ = __webpack_require__("../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_screens_payer_firstpayer_firstpayer_component__ = __webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_screens_payer_firstpayer_payertable_payertable_component__ = __webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_tables_service__ = __webpack_require__("../../../../../src/app/services/tables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_screens_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/screens/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_screens_admin_admintable_admintable_component__ = __webpack_require__("../../../../../src/app/components/screens/admin/admintable/admintable.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_main_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_screens_basic_firstbasic_firstbasic_component__["a" /* FirstbasicComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__["c" /* SecondbasicComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_screens_basic_finalbasic_finalbasic_component__["a" /* FinalbasicComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__["b" /* DialogContent */],
                __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__["a" /* DialogConfirm */],
                __WEBPACK_IMPORTED_MODULE_25__components_screens_payer_firstpayer_firstpayer_component__["a" /* FirstpayerComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_screens_payer_firstpayer_payertable_payertable_component__["a" /* PayertableComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_screens_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_screens_admin_admintable_admintable_component__["a" /* AdmintableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__app_routes__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_pdf_viewer__["a" /* PdfViewerModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_15__services_base_service__["a" /* BaseService */],
                __WEBPACK_IMPORTED_MODULE_27__services_tables_service__["a" /* TablesService */],
                __WEBPACK_IMPORTED_MODULE_13__guard_guard__["a" /* Guard */],
                __WEBPACK_IMPORTED_MODULE_14__guard_guard2__["a" /* Guard2 */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__["b" /* DialogContent */],
                __WEBPACK_IMPORTED_MODULE_23__components_screens_basic_secondbasic_secondbasic_component__["a" /* DialogConfirm */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guard_guard__ = __webpack_require__("../../../../../src/app/guard/guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard_guard2__ = __webpack_require__("../../../../../src/app/guard/guard2.ts");






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guard_guard__["a" /* Guard */]] },
    { path: 'home2/:bod', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guard_guard__["a" /* Guard */]] },
    { path: 'home3/:bod', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guard_guard__["a" /* Guard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_guard2__["a" /* Guard2 */]] },
    { path: 'adminUsers', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: '/login' },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-firstbasic *ngIf=\"veedor && flow == 1\"></app-firstbasic>\n<app-secondbasic *ngIf=\"veedor && flow != 1\"></app-secondbasic>\n<app-firstpayer *ngIf=\"payer\"></app-firstpayer>\n<app-admin *ngIf=\"admin\"></app-admin>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_ss, _as) {
        this._ss = _ss;
        this._as = _as;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.infoUser = this._ss.getCurrentUser();
        if (this.infoUser.type === '1') {
            this.admin = true;
            this.veedor = false;
            this.payer = false;
        }
        else if (this.infoUser.type === '2') {
            this.admin = false;
            this.veedor = false;
            this.payer = true;
        }
        else {
            this.admin = false;
            this.veedor = true;
            this.payer = false;
            this.flow = this._ss.getFlow();
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginform {\n    min-width: 150px;\n    width: 100%;\n    text-align: center;\n}\n\n.full-width {\n    width: 100%;\n    text-align: center;\n}\n\nh2 {\n    color: indigo;\n}\n\n.error {\n    -webkit-text-decoration-color: red;\n            text-decoration-color: red;\n    background-color: plum;\n    font-size: 18px;\n}\n\ndiv {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-card>\n        <form class=\"loginform\">\n\n            <h2>Inicio de sesión</h2>\n\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Código\" #_username autocomplete=\"given-name\" required/>\n            </mat-form-field>\n\n\n\n            <mat-form-field class=\"full-width\">\n                <input type=\"password\" matInput placeholder=\"Contraseña\" #_password autocomplete=\"off\" required/>\n            </mat-form-field>\n            <div class=\"full-width\" align=\"center\">\n                <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6Le-4UcUAAAAADQ2DztoiS80loIZEnMFKidO5noT\"></re-captcha>\n            </div>\n\n            <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n            <div *ngIf=\"error\" class=\"error\">{{error}}</div>\n            <br>\n            <button [disabled]=\"false\" (click)=\"login(_username.value, _password.value)\" mat-raised-button color=\"primary\">Entrar</button>\n\n        </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/components/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _as, _ss) {
        this.router = router;
        this._as = _as;
        this._ss = _ss;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        this.error = '';
        this.loading = false;
        this.listo = true;
    }
    LoginComponent.prototype.resolved = function (captchaResponse) {
        // console.log(`Resolved captcha with response ${captchaResponse}:`);
        if (captchaResponse != null) {
            this.listo = false;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this._ss.logout();
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.model.username = username;
        this.model.password = password;
        this.loading = true;
        this._as.login(this.model).subscribe(function (result) {
            // tslint:disable-next-line:triple-equals
            if (result['id'] != 0) {
                _this.correctLogin(result);
            }
            else {
                _this.wrongTry(result);
            }
        });
    };
    LoginComponent.prototype.wrongTry = function (data) {
        if (data['error'] === '1') {
            this.error = 'Código no existe';
            this.loading = false;
            this.listo = true;
            grecaptcha.reset();
        }
        else if (data['error'] === '2') {
            this.error = 'Contraseña Incorrecta';
            this.loading = false;
            grecaptcha.reset();
            this.listo = true;
        }
        else if (data['error'] === '3') {
            this.error = 'Ingresa código y contraseña válidos por favor';
            this.loading = false;
            grecaptcha.reset();
            this.listo = true;
        }
    };
    LoginComponent.prototype.correctLogin = function (data) {
        this._ss.setCurrentSession(data);
        if (this._ss.getCurrentUser().type === '3') {
            this._ss.setFlow(1);
        }
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .toolbar {\n     background-color: indigo;\n     color: white;\n     font-size: 18px;\n     height: 55px;\n     width: 100%;\n }\n \n table {\n     padding: 5px 5px 5px 5px;\n     margin: 0;\n     border-spacing: 0;\n     width: 100%;\n }\n \n button {\n     color: #ffffff00;\n     cursor: pointer;\n }\n \n button:hover {\n     background-color: rgb(46, 1, 78);\n     cursor: pointer;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <table>\n        <tr>\n            <td style=\"text-align: right; vertical-align: bottom; width: 70px\">\n                <strong> {{kind}}:</strong>\n            </td>\n            <td style=\"text-align: left; vertical-align: bottom; \">{{infoUser.name}} {{infoUser.surname}}</td>\n            <td rowspan=\"2\" style=\"width: 40px;\">\n                <button mat-mini-fab color=\"primary\" (click)=\"logout()\"><mat-icon svgIcon=\"exit\"></mat-icon></button>\n            </td>\n        </tr>\n        <tr>\n            <td style=\"text-align: right; vertical-align: top; width: 70px\"> <strong>Código:</strong> </td>\n            <td style=\"text-align: left; vertical-align: top;\">{{infoUser.username}}</td>\n        </tr>\n\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function HeaderComponent(_ss, _as, iconRegistry, sanitizer) {
        this._ss = _ss;
        this._as = _as;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        iconRegistry.addSvgIcon('exit', sanitizer
            .bypassSecurityTrustResourceUrl('assets/icons/exit.svg'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.infoUser = this._ss.getCurrentUser();
        if (this.infoUser.type === '1') {
            this.kind = 'Administrador';
        }
        else if (this.infoUser.type === '2') {
            this.kind = 'Pagador';
        }
        else if (this.infoUser.type === '3') {
            this.kind = 'Veedor';
        }
    };
    HeaderComponent.prototype.logout = function () {
        this._ss.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/main/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
var Form = /** @class */ (function () {
    function Form() {
    }
    return Form;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/wt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtHelper; });
var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw new Error('Illegal base64url string!');
            }
        }
        return decodeURIComponent(window.atob(output));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    return JwtHelper;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"maindiv\">\n    <mat-tab-group>\n        <mat-tab label=\"Sin Peritar\">\n            <app-admintable>\n\n            </app-admintable>\n        </mat-tab>\n        <mat-tab label=\"En Peritación\">\n            <app-admintable>\n\n            </app-admintable>\n        </mat-tab>\n        <br>\n        <mat-tab label=\"Peritadas sin pago\">\n            <app-admintable>\n\n            </app-admintable>\n        </mat-tab>\n        <mat-tab label=\"Peritadas y pagadas\">\n            <app-admintable>\n\n            </app-admintable>\n        </mat-tab>\n    </mat-tab-group>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/screens/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admintable/admintable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admintable/admintable.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admintable works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/screens/admin/admintable/admintable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmintableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmintableComponent = /** @class */ (function () {
    function AdmintableComponent() {
    }
    AdmintableComponent.prototype.ngOnInit = function () {
    };
    AdmintableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admintable',
            template: __webpack_require__("../../../../../src/app/components/screens/admin/admintable/admintable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/admin/admintable/admintable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmintableComponent);
    return AdmintableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".maindiv {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    max-width: 80%;\n    padding: 10px;\n}\n\n.buttonX {\n    font-size: 15px;\n    text-decoration: none;\n    padding: 10px;\n    font-weight: 600;\n    font-size: 20px;\n    color: #ffffff;\n    background-color: indigo;\n    border-radius: 6px;\n    border: 2px solid #310153;\n}\n\n.buttonX:hover {\n    color: #4b0082;\n    background-color: #ffffff;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!datos\">\n    <br>\n    <br>\n    <br>\n    <h3>Por favor espere mientras se carga la información.</h3>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div *ngIf=\"datos\" style=\"height:100%; width:100%; overflow: scroll\">\n    <mat-card>\n        <pdf-viewer [src]=\"pdfSrc\" fit-to-page=\"true\" zoom=\"0.5\" style=\"display: block;\"></pdf-viewer>\n\n        <iframe id=\"marco\" type=\"application/pdf\" hidden></iframe>\n\n    </mat-card>\n</div>\n<mat-card>\n    <button *ngIf=\"datos\" class=\"buttonX\" (click)=\" fin()\" Mat-raised-button color=\"primary\"> Finalizar peritaje de la bodega {{datos['warehouse_id']}}</button>\n    <button class=\"buttonX\" (click)=\"volver()\" Mat-raised-button>Corregir</button>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalbasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_form__ = __webpack_require__("../../../../../src/app/components/models/form.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinalbasicComponent = /** @class */ (function () {
    function FinalbasicComponent(_ss, _bs, router, route, sanitizer) {
        this._ss = _ss;
        this._bs = _bs;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.initDate = new Date();
    }
    FinalbasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datos = this.senddata;
        this.veedor = this._ss.getCurrentUser().name + ' ' + this._ss.getCurrentUser().surname;
        this.generarPDF();
        setTimeout(function () {
            if (!_this.datos) {
                _this._ss.setFlow(2);
                var bod_1;
                _this.route.params.subscribe(function (parametros) { return bod_1 = parametros['bod']; });
                _this.route.url.subscribe(function (x) {
                    if (x[0].toString() === 'home2') {
                        _this.router.navigate(['/home3', bod_1]);
                    }
                    else {
                        _this.router.navigate(['/home2', bod_1]);
                    }
                });
            }
        }, 1500);
    };
    FinalbasicComponent.prototype.generarPDF = function () {
        var _this = this;
        // this.formulario.value;
        var doc = new jsPDF();
        doc.setFont('helvetica');
        doc.setFontSize(11);
        doc.setLineWidth(0.1);
        /*for (let i = 30; i <= 270; i += 8) {
          doc.text(20, i, String(i));
          doc.line(30, i, 190, i);
        }
        for (let i = 30; i <= 190; i += 8) {
          doc.text(i - 4, 28, String(i));
          doc.line(i, 30, i, 270);
        }*/
        var $y = 18;
        doc.setFontType('bold');
        doc.text(32, 36 + $y, 'CIUDAD: ');
        doc.line(50, 36 + $y, 84, 36 + $y);
        doc.text(86, 36 + $y, 'FECHA: ');
        doc.line(102, 36 + $y, 140, 36 + $y);
        doc.text(142, 36 + $y, 'HORA INICIO: ');
        doc.line(168, 36 + $y, 190, 36 + $y);
        doc.text(142, 44 + $y, 'HORA SALIDA: ');
        doc.line(170, 44 + $y, 190, 44 + $y);
        doc.text(32, 76 + $y, 'NOMBRE TENEDOR: ');
        doc.line(71, 76 + $y, 190, 76 + $y);
        doc.text(32, 84 + $y, 'NOMBRE PAGADOR: ');
        doc.line(72, 84 + $y, 190, 84 + $y);
        doc.text(32, 92 + $y, 'NOMBRE REPRESENTANTE TENEDOR: ');
        doc.line(107, 92 + $y, 190, 92 + $y);
        doc.text(32, 100 + $y, 'NOMBRE VEEDOR: ');
        doc.line(69, 100 + $y, 190, 100 + $y);
        doc.text(32, 108 + $y, 'BODEGA NÚMERO: ');
        doc.line(69, 108 + $y, 190, 108 + $y);
        doc.text(32, 116 + $y, 'CANTIDAD DE CAJAS EN BODEGA: ');
        doc.line(99, 116 + $y, 190, 116 + $y);
        doc.text(32, 124 + $y, 'CANTIDAD PERITADA: ');
        doc.line(75, 124 + $y, 190, 124 + $y);
        doc.text(32, 140 + $y, 'OBSERVACIONES: ');
        doc.line(69, 140 + $y, 190, 140 + $y);
        doc.line(32, 148 + $y, 190, 148 + $y);
        doc.line(32, 156 + $y, 190, 156 + $y);
        doc.line(32, 164 + $y, 190, 164 + $y);
        doc.line(32, 172 + $y, 190, 172 + $y);
        doc.line(32, 180 + $y, 190, 180 + $y);
        // doc.line(32, 188 + $y, 190, 188 + $y);
        doc.line(32, 218 + $y, 76, 218 + $y);
        doc.text(44, 224 + $y, 'VEEDOR');
        doc.line(86, 218 + $y, 136, 218 + $y);
        doc.text(98, 222 + $y, 'TENEDOR O');
        doc.text(94, 226 + $y, 'REPRESENTANTE');
        doc.line(154, 218 + $y, 190, 218 + $y);
        doc.text(166, 224 + $y, 'PERITO');
        doc.setFontSize(8);
        doc.setLineWidth(0.03);
        doc.text(32, 230 + $y, 'NOMBRE');
        doc.line(46, 230 + $y, 76, 230 + $y);
        doc.text(32, 233 + $y, 'C.C.');
        doc.line(38, 233 + $y, 76, 233 + $y);
        doc.text(86, 230 + $y, 'NOMBRE');
        doc.line(100, 230 + $y, 136, 230 + $y);
        doc.text(86, 233 + $y, 'C.C.');
        doc.line(92, 233 + $y, 136, 233 + $y);
        doc.text(154, 230 + $y, 'NOMBRE');
        doc.line(168, 230 + $y, 190, 230 + $y);
        doc.text(154, 233 + $y, 'C.C.');
        doc.line(160, 233 + $y, 190, 233 + $y);
        // doc.addPage();
        doc.setFontType('normal');
        doc.setFontSize(11);
        doc.text(54, 35.7 + $y, 'BOGOTÁ D.C');
        doc.text(106, 35.7 + $y, this.initDate.toLocaleDateString('es-CO'));
        doc.text(174, 35.7 + $y, this.datos['initTime']);
        doc.text(174, 43.7 + $y, this.initDate.toLocaleTimeString());
        this.datos['date'] = this.initDate.toLocaleDateString('es-CO');
        this.datos['finTime'] = this.initDate.toLocaleTimeString();
        doc.text(75, 75.7 + $y, this.datos['holder'].toUpperCase());
        doc.text(75, 83.7 + $y, this.datos['judge'].toUpperCase());
        doc.text(110, 91.7 + $y, this.datos['agent'].toUpperCase());
        doc.text(74, 99.7 + $y, this.veedor.toUpperCase());
        this.datos['veedor'] = this.veedor;
        doc.text(75, 107.7 + $y, this.datos['warehouse_id'].toString());
        doc.text(102, 115.7 + $y, this.datos['quantity']);
        doc.text(78, 123.7 + $y, this.datos['judgedquantity'].toString());
        doc.text(70, 139.7 + $y, this.datos['observations'].toUpperCase());
        setTimeout(function () {
            _this.pdfSrc = doc.output('dataurlstring');
            doc.autoPrint();
            var fra = document.getElementById('marco');
            fra.setAttribute('src', doc.output('dataurlstring'));
        }, 2000);
        //  doc.output('dataurlnewwindow');
        // window.open(doc.output('bloburl'), '_blank');
        // doc.save('Peritaje Bodega No ' + this.datos['warehouse_id'] + '.pdf' );
    };
    FinalbasicComponent.prototype.volver = function () {
        var _this = this;
        this._ss.setFlow(2);
        var bod;
        this.route.params.subscribe(function (parametros) { return bod = parametros['bod']; });
        this.route.url.subscribe(function (x) {
            if (x[0].toString() === 'home2') {
                _this.router.navigate(['/home3', bod]);
            }
            else {
                _this.router.navigate(['/home2', bod]);
            }
        });
    };
    FinalbasicComponent.prototype.fin = function () {
        this._ss.setFlow(1);
        this.router.navigate(['/home']);
        this._bs.isDone(this.datos);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__models_form__["a" /* Form */])
    ], FinalbasicComponent.prototype, "senddata", void 0);
    FinalbasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finalbasic',
            template: __webpack_require__("../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/basic/finalbasic/finalbasic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FinalbasicComponent);
    return FinalbasicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".maindiv {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-align: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\nmat-card {\n    text-align: center;\n}\n\nmat-option {\n    text-align: center;\n}\n\na {\n    text-align: center;\n}\n\n.changeSelect {\n    color: #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 2px;\n    font-weight: 800;\n    font-size: 13px;\n    background-color: indigo;\n    border-radius: 6px;\n    border: 2px solid #310153;\n    width: 100px;\n}\n\n.changeSelect:hover {\n    color: #4b0082;\n    background-color: #ffffff;\n    cursor: pointer;\n}\n\nh2 {\n    color: indigo;\n}\n\na {\n    color: indigo;\n}\n\n.holdNumber {\n    font-size: 200px;\n    color: indigo;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n}\n\n.buttonX {\n    text-decoration: none;\n    padding: 10px;\n    font-weight: 600;\n    font-size: 20px;\n    color: #ffffff;\n    background-color: indigo;\n    border-radius: 6px;\n    border: 2px solid #310153;\n}\n\n.buttonX:hover {\n    color: #4b0082;\n    background-color: #ffffff;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"maindiv\">\n    <mat-card>\n        <h2>Bodega a peritar número:</h2>\n        <a>Cambiar Bodega</a>\n        <mat-select placeholder=\"Cambiar Bodega\" [(ngModel)]=\"selected\">\n            <mat-option *ngFor=\"let bodega of fullbodegas\" [value]=\"bodega\">\n                {{bodega}}\n            </mat-option>\n        </mat-select>\n        <a class=\"holdNumber\">{{selected}}</a>\n        <br>\n        <a class=\"buttonX\" (click)=\"next($event)\" mat-raised-button color=\"primary\">\n            Continuar\n        </a>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstbasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstbasicComponent = /** @class */ (function () {
    function FirstbasicComponent(_bs, _ss, router) {
        this._bs = _bs;
        this._ss = _ss;
        this.router = router;
        this.fullbodegas = [];
    }
    FirstbasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bs.getundones().subscribe(function (result) {
            _this.bodegas = result;
            _this.selected = result[0]['id'];
            _this.makeArray();
        });
    };
    FirstbasicComponent.prototype.makeArray = function () {
        for (var _i = 0, _a = this.bodegas; _i < _a.length; _i++) {
            var entry = _a[_i];
            var x = entry['id'];
            this.fullbodegas.push(x);
        }
    };
    FirstbasicComponent.prototype.next = function (bod) {
        this._ss.setFlow(2);
        this._bs.getInfoBodega(this.selected);
        this._bs.bodega = this.selected;
        this._bs.setProcess(this.selected, this._ss.getCurrentUser().id);
        this.router.navigate(['/home2', this.selected]);
    };
    FirstbasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-firstbasic',
            template: __webpack_require__("../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/basic/firstbasic/firstbasic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FirstbasicComponent);
    return FirstbasicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".maindiv {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    padding: 10px;\n}\n\n.card {\n    width: 100%;\n}\n\n.inputs {\n    min-width: 50%;\n    max-width: 65%;\n    width: 100%;\n}\n\n.buttonX {\n    text-decoration: none;\n    padding: 10px;\n    font-weight: 600;\n    font-size: 20px;\n    color: #ffffff;\n    background-color: indigo;\n    border-radius: 6px;\n    border: 2px solid #310153;\n}\n\n.buttonX:hover {\n    color: #4b0082;\n    background-color: #ffffff;\n    cursor: pointer;\n}\n\n.error {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 70%;\n    font-size: 18px;\n    padding: 15px 15px 15px 15px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    border-radius: 6px;\n    text-align: center;\n    word-wrap: break-word;\n    color: red;\n    background-color: plum;\n    margin: 0px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"maindiv\">\n    <div *ngIf=\"!data\">\n        <br>\n        <br>\n        <br>\n        <h3>Por favor espere mientras se carga la información.</h3>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n    <mat-card *ngIf=\"data && flow != 3\" style=\"text-align: center\">\n        <form [formGroup]=\"Form\">\n            <div>\n                <a>\n                    <table class=\"card\" cellspacing=\"0\">\n                        <tr>\n                            <td>\n                                <mat-form-field class=\"inputs\">\n                                    <input matInput placeholder=\"Número de Bodega\" disabled [value]=\"bod\" autocomplete=\"nope\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"inputs\">\n                                    <input matInput placeholder=\"Código de acuerdo\" disabled [value]=\"data.code\" autocomplete=\"nope\">\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\">\n                                <mat-form-field class=\"inputs\">\n                                    <input matInput placeholder=\"Nombre del Tenedor\" disabled [value]=\"data.holder\" autocomplete=\"nope\">\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\">\n                                <mat-form-field class=\"inputs\">\n                                    <input matInput placeholder=\"Nombre del Perito\" autocomplete=\"nope\" required formControlName=\"perito\">\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\">\n                                <mat-form-field class=\"inputs\">\n                                    <input matInput placeholder=\"Nombre del representante del Tenedor\" autocomplete=\" nope \" formControlName=\"representante\">\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\">\n                                <mat-form-field class=\"inputs \">\n                                    <input matInput placeholder=\"Cantidad Peritada \" type=\"number\" autocomplete=\"nope\" required formControlName=\"cantidadPeritada\">\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\">\n                                <mat-form-field class=\"inputs \">\n                                    <textarea matInput placeholder=\"Observaciones \" matTextareaAutosize matAutosizeMinRows=\"5 \" autocomplete=\"nope\" formControlName=\"observaciones\"></textarea>\n                                </mat-form-field>\n                            </td>\n                        </tr>\n                    </table>\n                </a>\n            </div>\n            <div *ngIf=\"error\" class=\"error\">{{msgError}}</div>\n            <br>\n            <div><a class=\"buttonX\" type=\"submit\" (click)=\"addDataForm(Form.value)\" Mat-raised-button cdkFocusInitial>Continuar</a></div>\n        </form>\n    </mat-card>\n</div>\n<app-finalbasic [senddata]=\"senddata\" *ngIf=\"flow == 3\"></app-finalbasic>"

/***/ }),

/***/ "../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SecondbasicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_form__ = __webpack_require__("../../../../../src/app/components/models/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user__ = __webpack_require__("../../../../../src/app/components/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SecondbasicComponent = /** @class */ (function () {
    function SecondbasicComponent(_bs, _as, _ss, route, formBuilder, _dialog, router) {
        var _this = this;
        this._bs = _bs;
        this._as = _as;
        this._ss = _ss;
        this.route = route;
        this.formBuilder = formBuilder;
        this._dialog = _dialog;
        this.router = router;
        this.data = new __WEBPACK_IMPORTED_MODULE_3__models_form__["a" /* Form */]();
        this.login = new __WEBPACK_IMPORTED_MODULE_8__models_user__["a" /* User */]();
        this.error = false;
        this.initTime = new Date();
        route.params.subscribe(function (parametros) { return _this.bod = parametros['bod']; });
        this._bs.getForm(this.bod).subscribe(function (result) {
            _this.assignForm(result);
        });
        this.Form = this.formBuilder.group({
            perito: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](),
            representante: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](),
            cantidadPeritada: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](),
            observaciones: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
    }
    SecondbasicComponent.prototype.ngOnInit = function () {
        this.flow = this._ss.getFlow();
    };
    SecondbasicComponent.prototype.assignForm = function (res) {
        this.data = res;
        this.data['initTime'] = this.initTime.toLocaleTimeString();
    };
    SecondbasicComponent.prototype.addDataForm = function (form) {
        this.error = false;
        if (!form.perito) {
            this.error = true;
            this.msgError = 'El Nombre del PERITO no puede estar vacío';
        }
        else if (!form.cantidadPeritada) {
            this.error = true;
            this.msgError = 'Por favor ingrese la CANTIDAD peritada';
        }
        else {
            if (form.representante) {
                this.data['agent'] = form.representante;
            }
            else {
                this.data['agent'] = 'N/A';
            }
            if (form.observaciones) {
                this.data['observations'] = form.observaciones;
            }
            else {
                this.data['observations'] = 'N/A';
            }
            this.data['judge'] = form.perito;
            this.data['judgedquantity'] = form.cantidadPeritada;
            this.data['warehouse_id'] = this.bod;
            this.openDialog();
        }
    };
    SecondbasicComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContent, {
            width: '250px',
            data: { numero: this.confirm }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.confirm = result;
            if (!_this.confirm) {
                _this.error = true;
                _this.msgError = 'Por favor confirme la cantidad peritada';
            }
            else if (_this.confirm === _this.data['judgedquantity']) {
                _this.openConfirm();
            }
            else {
                _this.error = true;
                _this.msgError = "La cantidad peritada confirmada NO concuerda\n                          con la ingresada en el formulario";
            }
        });
    };
    SecondbasicComponent.prototype.openConfirm = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogConfirm, {
            width: '250px',
            data: { pass: this.pass }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.infoUser = _this._ss.getCurrentUser();
                _this.login.username = _this.infoUser.username;
                _this.login.password = result;
                _this._as.login(_this.login).subscribe(function (rep) {
                    if (rep['id'] === _this.infoUser.id) {
                        _this.senddata = _this.data;
                        _this._ss.setFlow(3);
                        _this.flow = _this._ss.getFlow();
                        // console.log(this.senddata);
                        // setTimeout(() => { this.router.navigate(['/home3', this.bod]);
                        // }, 1500);
                    }
                    else {
                        _this.error = true;
                        _this.msgError = "La contrase\u00F1a ingresada NO coincide con su usuario,\n              por favor ingrese su contrase\u00F1a";
                    }
                });
            }
        });
    };
    SecondbasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secondbasic',
            template: __webpack_require__("../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/basic/secondbasic/secondbasic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SecondbasicComponent);
    return SecondbasicComponent;
}());

var DialogContent = /** @class */ (function () {
    function DialogContent(dialogRef, dato) {
        this.dialogRef = dialogRef;
        this.dato = dato;
    }
    DialogContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<div mat-dialog-content class=\"maindiv\">\n  <p style= \"color: indigo\">Para continuar por favor digite <strong>la cantidad peritada</strong> de nuevo.</p>\n  <mat-form-field>\n    <input matInput type=\"number\" [(ngModel)]=\"dato.numero\" required>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions style=\"text-align: center\">\n  &emsp;&emsp;&emsp;<button mat-button color=\"primary\" [mat-dialog-close]=\"dato.numero\" cdkFocusInitial>Continuar</button>\n</div>",
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogRef */], Object])
    ], DialogContent);
    return DialogContent;
}());

var DialogConfirm = /** @class */ (function () {
    function DialogConfirm(dialogRef, dato) {
        this.dialogRef = dialogRef;
        this.dato = dato;
    }
    DialogConfirm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<div mat-dialog-content class=\"maindiv\">\n  <p style= \"color: #1baef8\">Para continuar por favor digite de nuevo su <strong>contrase\u00F1a</strong>.</p>\n\n  <form>\n  <mat-form-field>\n    <input matInput type=\"password\" [(ngModel)]=\"dato.pass\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\" required>\n </mat-form-field>\n    </form>\n</div>\n<div mat-dialog-actions style=\"text-align: center\">\n  &emsp;&emsp;&emsp;<button mat-button color=\"primary\" [mat-dialog-close]=\"dato.pass\" cdkFocusInitial>Continuar</button>\n</div>\n",
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogRef */], Object])
    ], DialogConfirm);
    return DialogConfirm;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    border: 1px solid #e8e8e8;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n    <mat-tab-group #tabGroup (selectedTabChange)=\"tabChanged($event)\">\n\n        <mat-tab label=\"Peritadas sin pago\">\n            <app-payertable [selected]=\"2\">\n            </app-payertable>\n        </mat-tab>\n\n        <mat-tab label=\"Peritadas y pagadas\">\n            <app-payertable [selected]=\"3\">\n            </app-payertable>\n        </mat-tab>\n\n        <mat-tab label=\"En Peritación\">\n            <app-payertable [selected]=\"1\">\n            </app-payertable>\n        </mat-tab>\n\n        <mat-tab label=\"Sin Peritar\">\n            <app-payertable *ngIf=\"tab==3\" [selected]=\"0\">\n            </app-payertable>\n        </mat-tab>\n\n    </mat-tab-group>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstpayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstpayerComponent = /** @class */ (function () {
    function FirstpayerComponent() {
        var _this = this;
        this.tab = 0;
        this.tabChanged = function (tabChangeEvent) {
            // console.log('tabChangeEvent => ', tabChangeEvent);
            // console.log('index => ', tabChangeEvent.index);
            _this.tab = tabChangeEvent.index;
        };
    }
    FirstpayerComponent.prototype.ngOnInit = function () { };
    FirstpayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-firstpayer',
            template: __webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/firstpayer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstpayerComponent);
    return FirstpayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "        .maindiv {\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            text-align: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -ms-flex-item-align: center;\n                align-self: center;\n            width: auto;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n        }\n        \n        mat-table {\n            width: 700px;\n            overflow: auto;\n        }\n        \n        .search {\n            min-height: 64px;\n            padding: 8px 24px 0;\n        }\n        \n        .mat-form-field {\n            font-size: 14px;\n            width: 100%;\n        }\n        \n        .header {\n            cursor: pointer;\n            font-weight: bold;\n            color: rgba(0, 0, 0, 0.37);\n        }\n        \n        mat-row {\n            text-align: left;\n            min-height: 36px;\n            cursor: pointer;\n        }\n        \n        mat-row:nth-child(odd) {\n            background-color: rgba(76, 0, 130, 0.281);\n        }\n        \n        mat-row:hover {\n            background-color: rgba(76, 0, 130, 0.555);\n        }\n        \n        mat-cell:nth-child(4),\n        mat-header-cell:nth-child(4),\n        mat-cell:nth-child(5),\n        mat-header-cell:nth-child(5),\n        mat-cell:nth-child(3),\n        mat-header-cell:nth-child(3) {\n            -webkit-box-flex: 0;\n                -ms-flex: 0 0 80px;\n                    flex: 0 0 80px;\n        }\n        \n        mat-cell:nth-child(1),\n        mat-header-cell:nth-child(1) {\n            -webkit-box-flex: 0;\n                -ms-flex: 0 0 100px;\n                    flex: 0 0 100px;\n        }\n        \n        mat-header-cell {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            font-size: 13px;\n        }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\n    </mat-form-field>\n</div>\n\n<div *ngIf=\"!bodegas\">\n    <br>\n    <h4>Por favor espere mientras se carga la información.</h4>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n<div class=\"maindiv mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header\">Bodega</mat-header-cell>\n            <mat-cell *matCellDef=\"let bod\" style=\"text-align: center;\" (click)=\"rowClicked(bod.id)\"> {{bod.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"user_id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header\">Veedor</mat-header-cell>\n            <mat-cell *matCellDef=\"let bod\" (click)=\"rowClicked(bod.id)\"> {{bod.user_id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"done\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header\">Estado</mat-header-cell>\n            <mat-cell *matCellDef=\"let bod\" (click)=\"rowClicked(bod.id)\"> {{bod.done}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"payed\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header\">Pagado</mat-header-cell>\n            <mat-cell *matCellDef=\"let bod\" (click)=\"rowClicked(bod.id)\"> {{bod.payed}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"link\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header\"> Pagar </mat-header-cell>\n            <mat-cell *matCellDef=\"let bod\" (click)=\"rowClicked(bod.id)\">\n                <button mat-icon-button click=\"\">\n                    <mat-icon svgIcon=\"pdfb\" >\n                    </mat-icon>\n                </button>\n            </mat-cell>\n        </ng-container>\n\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[10, 20, 50, 100]\" [showFirstLastButtons]=\"true\">\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayertableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayertableComponent = /** @class */ (function () {
    function PayertableComponent(_bs, router, iconRegistry, sanitizer) {
        this._bs = _bs;
        this.router = router;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        iconRegistry.addSvgIcon('pdfb', sanitizer
            .bypassSecurityTrustResourceUrl('assets/icons/pdfb.svg'));
    }
    PayertableComponent.prototype.ngOnInit = function () {
        if (this.selected === 2 || this.selected === 3) {
            this.displayedColumns = ['id', 'user_id', 'done', 'payed', 'link'];
        }
        else {
            this.displayedColumns = ['id', 'user_id', 'done', 'payed'];
        }
        this.selection(this.selected);
    };
    PayertableComponent.prototype.selection = function (numb) {
        var _this = this;
        if (numb === 3) {
            this._bs.getStatus(2)
                .subscribe(function (result) {
                if (result['payed'] === 'SI') {
                    _this.bodegas = result;
                    _this.makeArray();
                }
                else {
                    _this.bodegas = [0, 0, 0, 0, 0];
                }
            });
        }
        else {
            this._bs.getStatus(numb)
                .subscribe(function (result) {
                _this.bodegas = result;
                _this.makeArray();
            });
        }
    };
    PayertableComponent.prototype.makeArray = function () {
        var _loop_1 = function (entry) {
            if (this_1.selected !== 0) {
                this_1._bs.getUsers(entry.user_id)
                    .subscribe(function (r) {
                    entry.user_id = r[0]['name'] + ' ' + r[0]['surname'];
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.bodegas; _i < _a.length; _i++) {
            var entry = _a[_i];
            _loop_1(entry);
        }
        this.printInfo();
    };
    PayertableComponent.prototype.printInfo = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatTableDataSource */](this.bodegas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PayertableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PayertableComponent.prototype.rowClicked = function (row) {
        console.log(row);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */])
    ], PayertableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSort */])
    ], PayertableComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PayertableComponent.prototype, "selected", void 0);
    PayertableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payertable',
            template: __webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/screens/payer/firstpayer/payertable/payertable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_base_service__["a" /* BaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PayertableComponent);
    return PayertableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guard/guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Guard = /** @class */ (function () {
    function Guard(router, _ss) {
        this.router = router;
        this._ss = _ss;
    }
    Guard.prototype.canActivate = function () {
        if (this._ss.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    Guard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], Guard);
    return Guard;
}());



/***/ }),

/***/ "../../../../../src/app/guard/guard2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Guard2 = /** @class */ (function () {
    function Guard2(router, _ss) {
        this.router = router;
        this._ss = _ss;
    }
    Guard2.prototype.canActivate = function () {
        if (this._ss.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        return true;
    };
    Guard2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], Guard2);
    return Guard2;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiUrl = 'http://op.asproinco.com/Slim/public/api/auth';
    }
    AuthenticationService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl, { 'username': user.username,
            'password': user.password }, { headers: headers })
            .map(this.getDatos);
    };
    AuthenticationService.prototype.getDatos = function (data) {
        var datos = data.json();
        return datos;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService(_http) {
        this._http = _http;
        this.getundones();
    }
    BaseService.prototype.getundones = function () {
        var _this = this;
        return this._http.get('http://op.asproinco.com/Slim/public/api/warehouse/isdone/0')
            .map(function (x) { return _this.getDatos(x.json()); });
    };
    BaseService.prototype.getStatus = function (st) {
        var _this = this;
        return this._http.get('http://op.asproinco.com/Slim/public/api/warehouse/status/' + st)
            .map(function (x) { return _this.getDatos(x.json()); });
    };
    BaseService.prototype.getDatos = function (data) {
        var datos = data;
        return datos;
    };
    BaseService.prototype.getInfoBodega = function (bod) {
        var _this = this;
        return this._http.get('http://op.asproinco.com/Slim/public/api/warehouse/id/' + bod)
            .map(function (x) { return _this.getDatos(x.json()); });
    };
    BaseService.prototype.getForm = function (id) {
        var _this = this;
        return this._http.get('http://op.asproinco.com/Slim/public/api/warehouse/form/' + id)
            .map(function (x) { return _this.getDatos(x.json()); });
    };
    BaseService.prototype.setProcess = function (id, userid) {
        var putUrl = 'http://op.asproinco.com/Slim/public/api/warehouse/process';
        var headerss = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headerss.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(putUrl, { 'id': id, 'userid': userid }, { headers: headerss });
    };
    BaseService.prototype.isDone = function (data) {
        var datos = JSON.stringify(data);
        var headerss = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headerss.append('Content-Type', 'application/x-www-form-urlencoded');
        var doneUrl = 'http://op.asproinco.com/Slim/public/api/warehouse/done';
        return this._http.post(doneUrl, datos, { headers: headerss });
    };
    BaseService.prototype.getUsers = function (user) {
        var _this = this;
        return this._http.get('http://op.asproinco.com/Slim/public/api/usuarios/' + user)
            .map(function (x) { return _this.getDatos(x.json()); });
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_models_wt__ = __webpack_require__("../../../../../src/app/components/models/wt.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageService = /** @class */ (function () {
    function StorageService(router, _http) {
        this.router = router;
        this._http = _http;
        this.currentSession = null;
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
    }
    StorageService.prototype.setCurrentSession = function (session) {
        this.currentSession = session;
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
    };
    StorageService.prototype.loadSessionData = function () {
        var sessionStr = this.localStorageService.getItem('currentUser');
        return (sessionStr) ? JSON.parse(sessionStr) : null;
    };
    StorageService.prototype.getCurrentSession = function () {
        return this.currentSession;
    };
    StorageService.prototype.removeCurrentSession = function () {
        this.localStorageService.removeItem('currentUser');
        this.localStorageService.removeItem('flow');
        this.currentSession = null;
    };
    StorageService.prototype.getCurrentUser = function () {
        var user;
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_3__components_models_wt__["a" /* JwtHelper */]();
        var session = this.getCurrentSession();
        var parsedToken = jwtHelper.decodeToken(session.token);
        user = parsedToken.context.user;
        return user;
    };
    StorageService.prototype.isAuthenticated = function () {
        return (this.getCurrentToken() != null) ? true : false;
    };
    StorageService.prototype.getCurrentToken = function () {
        var session = this.getCurrentSession();
        return (session && session.token) ? session.token : null;
    };
    StorageService.prototype.logout = function () {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    };
    StorageService.prototype.setFlow = function (inflow) {
        var flow = inflow;
        this.localStorageService.setItem('flow', JSON.stringify(inflow));
    };
    StorageService.prototype.getFlow = function () {
        var flow = this.localStorageService.getItem('flow');
        return flow;
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesService = /** @class */ (function () {
    function TablesService(_http) {
        this._http = _http;
    }
    TablesService.prototype.getStatus = function (st) {
        return this._http.get('http://op.asproinco.com/Slim/public/api/warehouse/status/' + st);
    };
    TablesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TablesService);
    return TablesService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map