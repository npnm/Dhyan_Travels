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
        this.ReturnValid = function (controlName) {
            var returnValue = '';
            if (controlName !== "") {
                if (this.contactUsForm.controls[controlName].errors !== null) {
                    if (this.contactUsForm.controls[controlName].errors.message !== undefined) {
                        return this.contactUsForm.controls[controlName].errors.message;
                    }
                    else if (this.contactUsForm.controls[controlName].errors.required === true && this.Submitted) {
                        return this.ValidationMessages.Messages[controlName + '_Required'];
                    }
                    else {
                        '';
                    }
                }
            }
        };
        this.SubmitContactRequest = function (action) {
            if (action === Constants_1.ApplicationConstants.CustomerAction.SUBMIT) {
                this.Submitted = true;
                if (this.contactUsForm.valid) {
                    this.ContactUsRequest.Customer = new modals_1.Customer(this.contactUsForm.FullName, this.contactUsForm.PhoneNumber, this.contactUsForm.EmailId);
                }
            }
            else if (action === Constants_1.ApplicationConstants.CustomerAction.CLEAR) {
                this.createForm();
            }
            console.log(this.ContactUsRequest);
            return;
        };
        this.ContactUsRequest = new modals_1.ContactUsRequest(new modals_1.Customer('', '', ''));
        this.clientInfoTableClass = ["clientInfoTable"];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ContactUsComponent.prototype.buildForm = function () {
        this.contactUsForm = this.fb.group({
            'FullName': [this.ContactUsRequest.Customer.FullName, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('FullName'), this.contactUsForm)]],
            'PhoneNumber': [this.ContactUsRequest.Customer.PhoneNumber, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('PhoneNumber'), this.contactUsForm)]],
            'EmailId': [this.ContactUsRequest.Customer.EmailId, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('EmailId'), this.contactUsForm)]]
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