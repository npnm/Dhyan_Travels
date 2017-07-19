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
var core_1 = require("@angular/core");
var MenuItems_1 = require('./MenuItems');
var FooterComponent = (function () {
    function FooterComponent() {
        this.MenuItemsComponentObejct = new MenuItems_1.MenuItemsComponent();
        this.LinkItems = this.MenuItemsComponentObejct.LinkItems;
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-content',
            template: "<footer>\n\t\t<div class=\"footer-content\">\n\t\t<div>Copyright \u00A9 2017 Dhyan Travels   |   </div>\n\t\t<div ><a *ngFor=\"let links of LinkItems\" [routerLink]=\"[links.Link]\" >{{links.LinkName}}</a>\n         </div>\n\t\t</div>\n    </footer>"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=Footer.js.map