import { Component } from "@angular/core";
import { Vehicle, EnquiryRequest } from './modals';
@Component(
    {
        templateUrl: 'views/cabs.html'
    })
export class VehiclesComponent {
    public cabObject: Vehicle[];
    constructor() {
        this.cabObject = [new Vehicle('id', '', 7, 13, 'Toyota - AC', 'Preferable for large families'),
        new Vehicle('id', '', 5, 10, 'Indica - AC', 'Preferable for small families'),
        new Vehicle('id', '', 5, 10, 'Indica - Non - AC', 'Preferable for small families'),
        new Vehicle('id', '', 5, 10, 'Toyota - Non - AC', 'Preferable for small families')];

    }
}