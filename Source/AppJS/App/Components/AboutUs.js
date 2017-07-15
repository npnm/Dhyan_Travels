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
var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.aboutUsText = "About Us";
        this.aboutUsDescription = "Payana is a new application for transportation, integrates city transportation for customers and driver partners onto a mobile technology platform. As one of India's fastest growing companies we ensure convenient, transparent and quick service fulfilment using technology to make transportation hassle free for everyone.Payana's offerings on its platform ranges from affordable AC cabs to the superior luxury offering as well as localized offerings like the ubiquitous Auto-rickshaws to Shuttle buses for daily commute. Using the Payana mobile app, users across 102 cities can conveniently book from over 450,000 vehicles available to them.We�ve empowered hundreds of thousands of driver-partners as entrepreneurs, by building an ecosystem encompassing financing institutions, car manufacturers, service providers etc. for drivers to grow professionally and personally as well as a consistent earning opportunity for them on the Payana platform.";
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        // this.apiService.FetchSiteContents().subscribe(data => console.log(data));
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            templateUrl: 'Views/AboutUs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=AboutUs.js.map