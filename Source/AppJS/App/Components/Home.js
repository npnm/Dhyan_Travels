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
var Modals_1 = require('./Modals');
var forms_1 = require('@angular/forms');
var Directives_1 = require('../Common/Directives');
var Constants_1 = require('../Common/Constants');
var Services_1 = require('../Api/Services');
var HomeComponent = (function () {
    function HomeComponent(formBuilder, APIService) {
        this.formBuilder = formBuilder;
        this.APIService = APIService;
        this.IsCabRequest = true;
        this.Submitted = false;
        this.ValidationMessages = Constants_1.ValidationMessages;
        this.ToggleService = function (requestType) {
            if (requestType === Constants_1.ApplicationConstants.RequestType.CAB && !this.IsCabRequest) {
                this.IsCabRequest = true;
                this.buildForm();
            }
            else if (requestType === Constants_1.ApplicationConstants.RequestType.TRIP && this.IsCabRequest) {
                this.IsCabRequest = false;
                this.buildForm();
            }
        };
        this.ReturnValid = function (controlName) {
            var returnValue = '';
            if (controlName !== "") {
                if (this.enquiryForm.controls[controlName].errors !== null) {
                    if (this.enquiryForm.controls[controlName].errors.message !== undefined) {
                        return this.enquiryForm.controls[controlName].errors.message;
                    }
                    else if (this.enquiryForm.controls[controlName].errors.required === true && this.Submitted) {
                        return this.ValidationMessages.Messages[controlName + '_Required'];
                    }
                    else {
                        '';
                    }
                }
            }
        };
        this.SubmitEnquiryRequest = function (action) {
            if (action === Constants_1.ApplicationConstants.CustomerAction.SUBMIT) {
                this.Submitted = true;
                if (this.enquiryForm.valid) {
                    this.EnquiryRequest = this.enquiryForm.value;
                    this.EnquiryRequest.Customer = new Modals_1.Customer(this.EnquiryRequest.FullName, this.EnquiryRequest.PhoneNumber);
                    console.log(this.EnquiryRequest);
                }
            }
            else if (action === Constants_1.ApplicationConstants.CustomerAction.CLEAR) {
                this.buildForm();
            }
            return;
        };
        this.EnquiryRequest = new Modals_1.EnquiryRequest(new Modals_1.Customer('', '', ''), '', '', '', '', '', new Modals_1.Vehicle('', '', 0, 0, '', ''));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    HomeComponent.prototype.buildForm = function () {
        this.Submitted = false;
        this.enquiryForm = this.formBuilder.group({
            'FullName': [this.EnquiryRequest.Customer.FullName, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('FullName'), this.enquiryForm)]],
            'PhoneNumber': [this.EnquiryRequest.Customer.PhoneNumber, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('PhoneNumber'), this.enquiryForm)]],
            'TravelDate': [this.EnquiryRequest.TravelDate, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('TravelDate'), this.enquiryForm)]],
            'Cab_FromPlace': [this.EnquiryRequest.Cab_FromPlace, [(this.IsCabRequest) ? forms_1.Validators.required : forms_1.Validators.nullValidator, Directives_1.validateField(new Constants_1.CustomValidationRules('Cab_FromPlace'), this.enquiryForm)]],
            'Cab_ToPlace': [this.EnquiryRequest.Cab_ToPlace, [(this.IsCabRequest) ? forms_1.Validators.required : forms_1.Validators.nullValidator, Directives_1.validateField(new Constants_1.CustomValidationRules('Cab_ToPlace'), this.enquiryForm)]],
            'Trip_NumberOfDays': [this.EnquiryRequest.Trip_NumberOfDays, [(!this.IsCabRequest) ? forms_1.Validators.required : forms_1.Validators.nullValidator, Directives_1.validateField(new Constants_1.CustomValidationRules('Trip_NumberOfDays'), this.enquiryForm)]],
            'Trip_Places': [this.EnquiryRequest.Trip_Places, [(!this.IsCabRequest) ? forms_1.Validators.required : forms_1.Validators.nullValidator, Directives_1.validateField(new Constants_1.CustomValidationRules('Trip_Places'), this.enquiryForm)]],
            'Vehicle': [this.EnquiryRequest.Vehicle.ID, [forms_1.Validators.required, Directives_1.validateField(new Constants_1.CustomValidationRules('Vehicle'), this.enquiryForm)]]
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'Views/Home.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, Services_1.APIService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=Home.js.map