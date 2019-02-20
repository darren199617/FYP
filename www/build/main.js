webpackJsonp([6],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(aFauth, navCtrl, toastCtrl, navParams) {
        this.aFauth = aFauth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n<ion-item>\n<ion-label floating>Email Address</ion-label>\n<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label floating>Password</ion-label>\n<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label floating>First Name</ion-label>\n<ion-input type="password" [(ngModel)]="user.fname"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label floating>Surname</ion-label>\n<ion-input type="password" [(ngModel)]="user.surname"></ion-input>\n</ion-item>\n\n\n<!--\n<ion-item>\n<ion-label floating>Full Name</ion-label>\n<ion-input type="text" [(ngModel)]="user.password"></ion-input>\n</ion-item>\n-->\n<button ion-button (click)="register(user)">Register</button>\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(afAuth, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
    }
    //check `` and ''
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); });
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<ion-item>\n<ion-label floating>UserName</ion-label>\n<ion-input> [(ngModel)]="profile.username"</ion-input>\n</ion-item>\n\n\n<ion-item>\n<ion-label floating>First Name</ion-label>\n<ion-input> [(ngModel)]="profile.firstname"</ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label floating>Last Name</ion-label>\n<ion-input> [(ngModel)]="profile.lastname"</ion-input>\n</ion-item>\n\n<button ion-button clear block (click)="createProfile()">Create Profile</button>\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test1_test1__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(toastCtrl, navCtrl, navParams, formbuilder) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.answer = {};
    }
    TestPage.prototype.NumberTechniques = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test1_test1__["a" /* Test1Page */]);
    };
    TestPage.prototype.show_input = function () {
        //this.show = true;
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    };
    TestPage.prototype.show_input1 = function () {
        //this.show = true;
        if (this.show1 == true) {
            this.show1 = false;
        }
        else {
            this.show1 = true;
        }
    };
    TestPage.prototype.show_input2 = function () {
        //this.show = true;
        if (this.show2 == true) {
            this.show2 = false;
        }
        else {
            this.show2 = true;
        }
    };
    TestPage.prototype.check1 = function () {
        if (this.enteredNumber === '19161945') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check2 = function () {
        if (this.enteredPhone === '1800341341') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check3 = function () {
        if (this.enteredName1 === 'John' || this.enteredName1 === 'john' || this.enteredName1 === 'JOHN') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember John',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check4 = function () {
        if (this.enteredName2 === 'Lisa' || this.enteredName2 === 'lisa' || this.enteredName2 === 'LISA') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Lisa',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check5 = function () {
        if (this.enteredName3 === 'Katie' || this.enteredName3 === 'katie' || this.enteredName3 === 'KATIE') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Katie',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\test\test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Memory Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="memTech">\n\n  <button ion-button  (click)="NumberTechniques()" class="btn">Memory Techniques</button>\n  </div>\n\n  <div padding-top class="EX">\n    <h3> 1. </h3>\n  </div>\n  <div class="numberCSS">\n<p> Are you able to remember phone numbers?</p> \n<p>Try to memorise the following number:</p>\n \n\n\n<button ion-button (click)="show_input()" class="btn" >Show/Hide number</button>\n<div *ngIf="show">\n <h5> 19161945</h5>\n\n  </div>\n  <div padding-bottom>\n  <ion-item>\n  <ion-input text-center placeholder="Enter Number" [(ngModel)]="enteredNumber" ></ion-input>\n</ion-item>\n<button ion-button (click)="check1()" class="btn">Check</button></div>\n\n <div padding-top class="EX">\n    <h3> 2. </h3>\n  </div>\n\n\n\n  </div>\n<div class="phoneCSS">\n\n<p>Now show the phone number and try to remember it, then hide it and see if you can remember it</p>\n<button ion-button (click)="show_input1()" class="btn" >Show/Hide phone number</button>\n<div *ngIf="show1">\n <h5> 1800341341</h5>\n\n  </div>\n\n\n\n<div>\n    <p> Enter the number you memorised:</p>\n\n</div>\n\n<div padding-bottom>\n<ion-item>\n<ion-input text-center placeholder="Enter Phone Number" [(ngModel)]="enteredPhone" ></ion-input>\n</ion-item>\n<button  ion-button (click)="check2()" class="btn">Check</button>\n</div>\n</div>\n\n\n\n  <div padding-top class="EX">\n    <h3> 3. </h3>\n  </div>\n <div class="names">\n  <p>Look at the following pictures and the names below. Try to remember the name of each person. When you\'re ready, hide the names and enter the correct name below each picture</p></div>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-img src="../assets/imgs/person1.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person2b.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person3b.jpg"></ion-img>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n<div class="names">\n<div *ngIf="show2">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <h3>John</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Lisa</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Katie</h3>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n<button ion-button (click)="show_input2()" class="btn">Show/Hide Names</button>\n\n\n<h3 padding-top>A</h3>\n<ion-img src="../assets/imgs/person1.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName1"></ion-input>\n</ion-item>\n<button  ion-button (click)="check3()" class="btn">Check</button>\n\n\n<h3 padding-top>B</h3>\n<ion-img src="../assets/imgs/person2b.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName2"></ion-input>\n</ion-item>\n<button  ion-button (click)="check4()" class="btn">Check</button>\n\n\n<h3 padding-top>C</h3>\n<ion-img src="../assets/imgs/person3b.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName3"></ion-input>\n</ion-item>\n<button  ion-button (click)="check5()" class="btn">Check</button>\n\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], TestPage);
    return TestPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Test1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Test1Page = /** @class */ (function () {
    function Test1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Test1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Test1Page');
    };
    Test1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test1',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\test1\test1.html"*/'<!--\n  Generated template for the Test1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Memory Techniques</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div >\n	<div class="point"><p><b>1. Numbers</b></p></div>\n	<div padding>\n		<h4 style="text-align: center;"><b>Below there are some methods for trying to remember numbers such as phone numbers</b></h4>\n		<div padding class="numbers">\n			<div>	\n				<p>\n					When looking at numbers there is two different ways to try remember them.\n					The first is to check if the number has something memorable.\n					An example of theis would be: 19162000\n					the above number could be broken up into two separate parts:</p>\n				<p>\n					<b>1916[Easter Rising], 2000[Millenium]</b>\n				</p>\n				<p>\n					<b>19162000</b>\n				</p>\n			</div>\n\n			<div>\n				<p>\n					Another way of remembering numbers is to break them up into smaller sections that may not normally be memorable. A phone number becomes far easier to learn once it has been divided.\n					An example of this would be: \n					1800456987\n					The above number would be easier to learn if broken into three sections:\n				</p>\n				<p>\n					<b>1800[1] 456[2] 987[3]</b>\n				</p>\n				<p>\n					<b>1800456987</b>	\n				</p>\n\n			</div>\n		</div>\n	</div>\n\n	<div class="point"><p><b>2. People</b></p></div>		\n	<div padding>	\n		<h4 style="text-align: center;"><b> Below are some ways to remember names</b></h4>\n		<div padding class="names">\n			<div>\n				<p>\n					To try remember someone\'s name you should try the following tips:</p>\n\n					<p>1.When meeting someone for thefirst time you should repeat their name out loud.</p> \n						\n						<p><b>For Example: Aften being introduced to Stephen you could ask. "So stephen, what do you work as?".</b></p> \n					\n					<p>2.You could try to associate the person with a place or a job. so when Stephen answers your question, try to associate his answer with his name</p> \n				    \n					    <p><b>"Stephen the carpenter"</b></p>\n					\n					<p>3.Repeat their name silently to yourself.</p>\n			</div>\n		</div>\n	</div>\n</div>	\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\test1\test1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Test1Page);
    return Test1Page;
}());

//# sourceMappingURL=test1.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/information/information.module": [
		719,
		5
	],
	"../pages/login/login.module": [
		720,
		4
	],
	"../pages/profile/profile.module": [
		721,
		3
	],
	"../pages/register/register.module": [
		722,
		2
	],
	"../pages/test/test.module": [
		723,
		0
	],
	"../pages/test1/test1.module": [
		724,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_information_information__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_test_test__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_test1_test1__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_firebase_config__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpModule } from '@angular/http';
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_test1_test1__["a" /* Test1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test1/test1.module#Test1PageModule', name: 'Test1Page', segment: 'test1', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_16__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_test1_test1__["a" /* Test1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_information_information__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_test_test__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Information', component: __WEBPACK_IMPORTED_MODULE_7__pages_information_information__["a" /* InformationPage */] },
            { title: 'Memory Test', component: __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */] }
            // { title: 'Login', component: LoginPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"X:\_thesis\FYP\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"X:\_thesis\FYP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBk_qm9F5LYzICSWThm2pq3koQ33Rb3_g4",
    authDomain: "fyp-memory.firebaseapp.com",
    databaseURL: "https://fyp-memory.firebaseio.com",
    projectId: "fyp-memory",
    storageBucket: "fyp-memory.appspot.com",
    messagingSenderId: "457371123053"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(aFauth, toast, navCtrl) {
        this.aFauth = aFauth;
        this.toast = toast;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.logoutAService = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>   <img src="../../assets/imgs/leaf.png" alt="couldn\'t load"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="fullpage">\n  <h3 style="color: #3bce8f;"> <b>Welcome to Memory-Leaf</b></h3>\n\n\n\n  <button ion-button (click)="logoutAService()" class="btn">Log Out</button>\n</div>\n \n \n\n\n\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// SIDEMENU DISAPPEARING, NEED TO FIX THIS
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage');
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\information\information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	 <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center;">\n  <div padding class="bground">\n    <div>\n <div class="facts">\n  <h1 style="font-size: 50px; color: black;">Memory facts</h1>\n</div>\n\n  <h5> Memory is not perfect.</h5>\n    <h5> Learned techniques can improve your memory</h5>\n      <h5> Everybody has memory problems </h5>	\n <p>If you are any way concerned about your memory please visit your Doctor. </p>\n\n <h5> If you want to see some of the memory techniques that can help you to improve your memory click on the button below!</h5>\n\n </div>\n</div>\n<div>\n <button ion-button  (click)="NumberTechniques()" class="btn">Memory Techniques</button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { Loginbutton } from '/Loginbutton';





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    //HomePage: HomePage;
    function LoginPage(aFauth, toastCtrl, navCtrl, navParams) {
        this.aFauth = aFauth;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    //goHomePage()
    //{
    //	this.navCtrl.setRoot(HomePage);
    //}
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, toast, toast, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                            toast = this.toastCtrl.create({
                                message: 'Successfully Logged In',
                                duration: 3000
                            });
                            toast.present();
                        }
                        else {
                            toast = this.toastCtrl.create({
                                message: 'Incorrect Email/Password',
                                duration: 3000
                            });
                            toast.present();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.information = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"X:\_thesis\FYP\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>   <img src="../../assets/imgs/leaf.png" alt="couldn\'t load"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n\n\n\n<ion-item>\n<ion-label floating>Email Address</ion-label>\n<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label floating>Password</ion-label>\n<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n</ion-item>\n\n<button ion-button (click)="login(user)">Login</button>\n<button ion-button color="light" (click)="register()">Register</button>\n<button ion-button (click)="information()">Information</button>\n\n\n\n\n\n<!--\n\n<ion-list>\n  \n  <ion-item>\n    <ion-label color="primary" stacked>UserName</ion-label>\n    <ion-input type="email" placeholder="Enter email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Password</ion-label>\n    <ion-input type="password" placeholder="Enter Password"></ion-input>\n  </ion-item>\n\n<ion-buttons>\n\n  <button ion-button (click)= "openHomePage()">Log In</button>\n</ion-buttons>\n\nNeed to fix button and link it with firebase\n\n</ion-list>\n-->\n</ion-content>\n'/*ion-inline-end:"X:\_thesis\FYP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map