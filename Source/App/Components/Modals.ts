class Customer {
    FullName: string;
    PhoneNumber: string;
    FromPlace: string;
    ToPlace: string;
    NoOfPassengers: string;
    Type: string;
    constructor(FullName: string = '', PhoneNumber: string = '', FromPlace: string = '', ToPlace: string = '', NoOfPassengers: string = '', Type: string = '') {
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.FromPlace = FromPlace;
        this.ToPlace = ToPlace;
        this.NoOfPassengers = NoOfPassengers;
        this.Type = Type;
    }

}
class Contact {
    FullName: string;
    PhoneNumber: string;
    EmailId: string;
    constructor(FullName: string = '', PhoneNumber: string = '', EmailId: string = '' ) {
        this.FullName = FullName;
        this.PhoneNumber = PhoneNumber;
        this.EmailId = EmailId;
    }

}

class Vehicle {
    ID: string;
    Type: string;
    Capacity: number;
    CostPerKilometer: number;
    Title: string;
    ShortDescription: string;

    constructor(ID: string = '', Type: string = '', Capacity: number = 0, CostPerKiloMeter: number = 0, Title: string = '', ShortDescription: string = '') {
        this.ID = ID;
        this.Type = Type;
        this.Capacity = Capacity;
        this.CostPerKilometer = CostPerKiloMeter;
        this.Title = Title;
        this.ShortDescription = ShortDescription;
    }
}


class EnquiryRequest {
    Customer: Customer;    
    Vehicle: Vehicle;
    TravelDate:string;
    Cab_FromPlace: string;
    Cab_ToPlace: string;
    Trip_NumberOfDays: string;
    Trip_Places: string;

    constructor(tempCustomer: Customer, FromPlace: string = '', ToPlace: string = '', tempCab: Vehicle = null) {

        this.Cab_FromPlace = FromPlace;
        this.Cab_ToPlace = ToPlace;
        if (tempCustomer === null) {
            tempCustomer = new Customer('', '', '');
        }
        this.Customer = new Customer(tempCustomer.FullName, tempCustomer.PhoneNumber)
        if (tempCab === null) {
            tempCab = new Vehicle('', '', 0, 0);
        }
        this.Vehicle = new Vehicle(tempCab.ID, tempCab.Type, tempCab.Capacity, tempCab.CostPerKilometer);
    }
}

class ContactUsRequest {
   Contact: Contact;
   
    constructor(tempContact: Contact, ) {

        // this.FromPlace = FromPlace;
        // this.ToPlace = ToPlace;
        if (tempContact === null) {
            tempContact = new Contact('', '', '');
        }
        this.Contact = new Contact(tempContact.FullName, tempContact.PhoneNumber, tempContact.EmailId)
        
    }
}
export { Customer,Contact, Vehicle, EnquiryRequest, ContactUsRequest };