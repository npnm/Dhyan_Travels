import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Contact, Vehicle, EnquiryRequest, ContactUsRequest } from './Modals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateField } from '../Common/Directives';
import { CustomValidationRules, ApplicationConstants } from '../Common/Constants';
import { APIService } from '../Api/Services';
@Component(
    {
        templateUrl: 'Views/Home.html'
    })
export class HomeComponent {

    public EnquiryRequest: EnquiryRequest;
    public enquiryForm: FormGroup;
    public IsCabRequest: boolean = true;
    constructor(private formBuilder: FormBuilder) {
        this.EnquiryRequest = new EnquiryRequest(new Customer('', '', '', '', '', ''), '', '', new Vehicle('', '', 0, 0, '', ''));
    }
    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.createForm();
    }

    createForm = function () {
        this.enquiryForm = this.formBuilder.group({
            'FullName': [this.EnquiryRequest.Customer.FullName, [validateField(new CustomValidationRules('FullName'), this.enquiryForm)]],
            'PhoneNumber': [this.EnquiryRequest.Customer.PhoneNumber, [validateField(new CustomValidationRules('PhoneNumber'), this.enquiryForm)]],
            'TravelDate': [this.EnquiryRequest.TravelDate, [validateField(new CustomValidationRules('TravelDate'), this.enquiryForm)]],
            'Cab_FromPlace': [this.EnquiryRequest.Cab_FromPlace, [validateField(new CustomValidationRules('Cab_FromPlace'), this.enquiryForm)]],
            'Cab_ToPlace': [this.EnquiryRequest.Cab_ToPlace, [validateField(new CustomValidationRules('Cab_ToPlace'), this.enquiryForm)]],
            'Trip_NumberOfDays': [this.EnquiryRequest.Trip_NumberOfDays, [validateField(new CustomValidationRules('Trip_NumberOfDays'), this.enquiryForm)]],
            'Trip_Places': [this.EnquiryRequest.Trip_Places, [validateField(new CustomValidationRules('Trip_Places'), this.enquiryForm)]],
            'Vehicle': [this.EnquiryRequest.Vehicle.ID, [validateField(new CustomValidationRules('Vehicle'), this.enquiryForm)]]

        });
    }

    ToggleService = function (requestType: string) {
        if (requestType === ApplicationConstants.RequestType.CAB) {
            this.IsCabRequest = true;
        }
        else {
            this.IsCabRequest = false;
        }
        this.createForm();
    }
    SubmitEnquiryRequest = function (action: string) {
        if (action === ApplicationConstants.CustomerAction.SUBMIT) {
            this.EnquiryRequest = this.enquiryForm.value;
        }
        else if (action === ApplicationConstants.CustomerAction.CLEAR) {
            this.createForm();
        }
        console.log(this.EnquiryRequest);
        return;
    }
}