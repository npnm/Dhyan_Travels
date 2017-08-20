"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Services_1 = require('./Api/Services');
var AppComponent = (function () {
    function AppComponent(APIService) {
        var _this = this;
        this.APIService = APIService;
        this.APIService.LoadPage = true;
        if (this.APIService.PageContent === undefined) {
            this.APIService.FetchSiteContents().subscribe(function (data) {
                _this.APIService.PageContent = data;
                _this.APIService.LoadPage = true;
                console.log("ReadApplicationContentFile: Response ", data);
            });
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <menu-items>Loading Menu items here ...</menu-items>\n        <footer-content></footer-content>\n        "
        }), 
        __metadata('design:paramtypes', [Services_1.APIService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=App.js.map