"use strict";
var Customer = (function () {
    function Customer(FullName, PhoneNumber, EmailId) {
        if (FullName === void 0) { FullName = ''; }
        if (PhoneNumber === void 0) { PhoneNumber = ''; }
        if (EmailId === void 0) { EmailId = ''; }
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.EmailId = EmailId;
    }
    return Customer;
}());
exports.Customer = Customer;
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
    function EnquiryRequest(tempCustomer, TravelDate, Cab_ToPlace, Cab_FromPlace, Trip_NumberOfDays, Trip_Places, tempCab) {
        if (TravelDate === void 0) { TravelDate = ''; }
        if (Cab_ToPlace === void 0) { Cab_ToPlace = ''; }
        if (Cab_FromPlace === void 0) { Cab_FromPlace = ''; }
        if (Trip_NumberOfDays === void 0) { Trip_NumberOfDays = ''; }
        if (Trip_Places === void 0) { Trip_Places = ''; }
        if (tempCab === void 0) { tempCab = null; }
        this.Cab_FromPlace = Cab_FromPlace;
        this.Cab_ToPlace = Cab_ToPlace;
        this.TravelDate = TravelDate;
        this.Trip_NumberOfDays = Trip_NumberOfDays;
        this.Trip_Places = Trip_Places;
        if (tempCustomer === null) {
            tempCustomer = new Customer('', '', '');
        }
        this.Customer = new Customer(tempCustomer.FullName, tempCustomer.PhoneNumber, tempCustomer.EmailId);
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
        if (tempContact === null) {
            tempContact = new Customer('', '', '');
        }
        this.Customer = new Customer(tempContact.FullName, tempContact.PhoneNumber, tempContact.EmailId);
    }
    return ContactUsRequest;
}());
exports.ContactUsRequest = ContactUsRequest;
//# sourceMappingURL=modals.js.map