import { Component } from "@angular/core";
import { Customer, Vehicle, EnquiryRequest, ContactUsRequest } from './modals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateField } from '../Common/Directives';
import { CustomValidationRules, ApplicationConstants, ValidationMessages } from '../Common/Constants';
import { APIService } from '../Api/Services';
@Component(
    {
        templateUrl: 'Views/ContactUs.html'
    })

export class ContactUsComponent {

    public ContactUsRequest: ContactUsRequest;
    public contactUsForm: FormGroup;
    public Customer: Customer;
    public clientInfoTableClass: string[];
    private ValidationMessages = ValidationMessages;
    private Submitted: boolean = false;
    constructor(private fb: FormBuilder, private APIService: APIService) {
        this.ContactUsRequest = new ContactUsRequest(new Customer('', '', ''));
        this.clientInfoTableClass = ["clientInfoTable"]
    }
    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.Submitted = false;
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
                console.log(this.ContactUsRequest);
            }
        }
        else if (action === ApplicationConstants.CustomerAction.CLEAR) {
            this.buildForm();
        }
        return;
    }

}