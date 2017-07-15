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
var router_1 = require('@angular/router');
var MenuItemsComponent = (function () {
    function MenuItemsComponent(route) {
        this.route = route;
        this.titleText = "Payana";
        //Application Links
        this.LinkItems = [
            { LinkName: "Home", Link: "/Home", Active: true },
            { LinkName: "Cabs", Link: "/Cabs", Active: false },
            { LinkName: "About", Link: "/AboutUs", Active: false },
            { LinkName: "Contact", Link: "/ContactUs", Active: false }];
    }
    //Function to navigate
    MenuItemsComponent.prototype.AppNavigation = function (linkObject) {
        console.log(linkObject);
        for (var link in this.LinkItems) {
            if (this.LinkItems[link].Link === linkObject.Link) {
                this.LinkItems[link].Active = true;
            }
            else {
                this.LinkItems[link].Active = false;
            }
        }
        this.route.navigate([linkObject.Link]);
    };
    MenuItemsComponent = __decorate([
        core_1.Component({
            selector: 'menu-items',
            template: "   \n                <div class=\"MainHeader\">\n                       \n                <div>\n        <div class=\"nav\">\n            <div class=\"logo\"></div>\n            <ul class=\"navlist\">\n               <li [ngClass]=\"{'select':links.Active}\" *ngFor=\"let links of LinkItems\"><a [ngClass]=\"{'select':links.Active}\" (click)=\"AppNavigation(links)\">{{links.LinkName}}</a></li>  \n            </ul>\n\n        </div>\n        <div style=\"\n    height: 2px;\n    background-color: #000d58;\n        display: inline-block;\n            width: 100%;\"></div>\n        <div style=\"\n    height: 2px;\n    background-color: #f3cc2f;\n\tmargin-bottom: 3px;\n            width: 100%;\"></div>\n    </div>\n   </div>\n   <router-outlet></router-outlet>\n   "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MenuItemsComponent);
    return MenuItemsComponent;
}());
exports.MenuItemsComponent = MenuItemsComponent;
//# sourceMappingURL=MenuItems.js.map