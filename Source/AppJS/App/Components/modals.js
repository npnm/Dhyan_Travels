"use strict";
var Customer = (function () {
    function Customer(FullName, PhoneNumber, FromPlace, ToPlace, NoOfPassengers, Type) {
        if (FullName === void 0) { FullName = ''; }
        if (PhoneNumber === void 0) { PhoneNumber = ''; }
        if (FromPlace === void 0) { FromPlace = ''; }
        if (ToPlace === void 0) { ToPlace = ''; }
        if (NoOfPassengers === void 0) { NoOfPassengers = ''; }
        if (Type === void 0) { Type = ''; }
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.FromPlace = FromPlace;
        this.ToPlace = ToPlace;
        this.NoOfPassengers = NoOfPassengers;
        this.Type = Type;
    }
    return Customer;
}());
exports.Customer = Customer;
var Contact = (function () {
    function Contact(FullName, PhoneNumber, EmailId) {
        if (FullName === void 0) { FullName = ''; }
        if (PhoneNumber === void 0) { PhoneNumber = ''; }
        if (EmailId === void 0) { EmailId = ''; }
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.EmailId = EmailId;
    }
    return Contact;
}());
exports.Contact = Contact;
var Vehicle = (function () {
    function Vehicle(ID, Type, Capacity, CostPerKiloMeter, Title, ShortDescription) {
        if (ID === void 0) { ID = ''; }
        if (Type === void 0) { Type = ''; }
        if (Capacity === void 0) { Capacity = 0; }
        if (CostPerKiloMeter === void 0) { CostPerKiloMeter = 0; }
        if (Title === void 0) { Title = ''; }
        if (ShortDescription === void 0) { ShortDescription = ''; }
        this.ID = ID;
        this.Type = Type;
        this.Capacity = Capacity;
        this.CostPerKilometer = CostPerKiloMeter;
        this.Title = Title;
        this.ShortDescription = ShortDescription;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var EnquiryRequest = (function () {
    function EnquiryRequest(tempCustomer, FromPlace, ToPlace, tempCab) {
        if (FromPlace === void 0) { FromPlace = ''; }
        if (ToPlace === void 0) { ToPlace = ''; }
        if (tempCab === void 0) { tempCab = null; }
        this.Cab_FromPlace = FromPlace;
        this.Cab_ToPlace = ToPlace;
        if (tempCustomer === null) {
            tempCustomer = new Customer('', '', '');
        }
        this.Customer = new Customer(tempCustomer.FullName, tempCustomer.PhoneNumber);
        if (tempCab === null) {
            tempCab = new Vehicle('', '', 0, 0);
        }
        this.Vehicle = new Vehicle(tempCab.ID, tempCab.Type, tempCab.Capacity, tempCab.CostPerKilometer);
    }
    return EnquiryRequest;
}());
exports.EnquiryRequest = EnquiryRequest;
var ContactUsRequest = (function () {
    function ContactUsRequest(tempContact) {
        // this.FromPlace = FromPlace;
        // this.ToPlace = ToPlace;
        if (tempContact === null) {
            tempContact = new Contact('', '', '');
        }
        this.Contact = new Contact(tempContact.FullName, tempContact.PhoneNumber, tempContact.EmailId);
    }
    return ContactUsRequest;
}());
exports.ContactUsRequest = ContactUsRequest;
//# sourceMappingURL=modals.js.map