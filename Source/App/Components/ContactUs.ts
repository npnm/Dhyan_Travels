import { Component } from "@angular/core";
import { Customer, Vehicle, EnquiryRequest, ContactUsRequest } from './modals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateField } from '../Common/Directives';
import { CustomValidationRules, ApplicationConstants, ValidationMessages } from '../Common/Constants';
@Component(
    {
        templateUrl: 'Views/ContactUs.html'
    })

export class ContactUsComponent {

    public ContactUsRequest: ContactUsRequest;
    public contactUsForm: FormGroup;
    public Customer: Customer;
    public clientInfoTableClass: string[];
    private ValidationMessages: ValidationMessages;
    constructor(private fb: FormBuilder) {
        this.ContactUsRequest = new ContactUsRequest(new Customer('', '', ''));
        this.clientInfoTableClass = ["clientInfoTable"]
    }
    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.contactUsForm = this.fb.group({
            'FullName': [this.ContactUsRequest.Customer.FullName, [Validators.required, validateField(new CustomValidationRules('FullName'), this.contactUsForm)]],
            'PhoneNumber': [this.ContactUsRequest.Customer.PhoneNumber, [Validators.required, validateField(new CustomValidationRules('PhoneNumber'), this.contactUsForm)]],
            'EmailId': [this.ContactUsRequest.Customer.EmailId, [Validators.required, validateField(new CustomValidationRules('EmailId'), this.contactUsForm)]]
        });
    }

    public ContactUsText = "Contact Us";
    NavigateToFacebook() {
        window.open("https://www.facebook.com/cocacola", "_blank");
    }

    ReturnValid = function (controlName: string) {
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
    }

    SubmitContactRequest = function (action: string) {
        if (action === ApplicationConstants.CustomerAction.SUBMIT) {
            this.Submitted = true;
            if (this.contactUsForm.valid) {
                this.ContactUsRequest.Customer = new Customer(this.contactUsForm.FullName, this.contactUsForm.PhoneNumber, this.contactUsForm.EmailId);
            }
        }
        else if (action === ApplicationConstants.CustomerAction.CLEAR) {
            this.createForm();
        }
        console.log(this.ContactUsRequest);
        return;
    }

}