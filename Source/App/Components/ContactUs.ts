import { Component } from "@angular/core";
import { Customer, Contact, Vehicle, EnquiryRequest, ContactUsRequest } from './modals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateField } from '../Common/Directives';
import { CustomValidationRules } from '../Common/Constants';
@Component(
    {
        templateUrl: 'Views/ContactUs.html'
    })

export class ContactUsComponent {

    public ContactUsRequest: ContactUsRequest;
    public contactUsForm: FormGroup;
    public Contact: Contact;
    public clientInfoTableClass: string[];
    constructor(private fb: FormBuilder) {
        this.ContactUsRequest = new ContactUsRequest(new Contact('', '', ''));
        this.clientInfoTableClass = ["clientInfoTable"]
    }
    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.contactUsForm = this.fb.group({
            'FullName': [this.ContactUsRequest.Contact.FullName, [validateField(new CustomValidationRules('FullName'), this.contactUsForm)]],
            'PhoneNumber': [this.ContactUsRequest.Contact.PhoneNumber, [validateField(new CustomValidationRules('PhoneNumber'), this.contactUsForm)]],
            'EmailId': [this.ContactUsRequest.Contact.EmailId, [validateField(new CustomValidationRules('EmailId'), this.contactUsForm)]]
        });
    }

    public ContactUsText = "Contact Us";
    NavigateToFacebook() {
        window.open("https://www.facebook.com/cocacola", "_blank");
    }

}