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
var modals_1 = require('./modals');
var forms_1 = require('@angular/forms');
var Directives_1 = require('../Common/Directives');
var Constants_1 = require('../Common/Constants');
var ContactUsComponent = (function () {
    function ContactUsComponent(fb) {
        this.fb = fb;
        this.ContactUsText = "Contact Us";
        this.ContactUsRequest = new modals_1.ContactUsRequest(new modals_1.Contact('', '', ''));
        this.clientInfoTableClass = ["clientInfoTable"];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactUsComponent.prototype.buildForm = function () {
        this.contactUsForm = this.fb.group({
            'FullName': [this.ContactUsRequest.Contact.FullName, [Directives_1.validateField(new Constants_1.CustomValidationRules('FullName'), this.contactUsForm)]],
            'PhoneNumber': [this.ContactUsRequest.Contact.PhoneNumber, [Directives_1.validateField(new Constants_1.CustomValidationRules('PhoneNumber'), this.contactUsForm)]],
            'EmailId': [this.ContactUsRequest.Contact.EmailId, [Directives_1.validateField(new Constants_1.CustomValidationRules('EmailId'), this.contactUsForm)]]
        });
    };
    ContactUsComponent.prototype.NavigateToFacebook = function () {
        window.open("https://www.facebook.com/cocacola", "_blank");
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            templateUrl: 'Views/ContactUs.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=ContactUs.js.map