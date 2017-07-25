import { Component } from "@angular/core";
import { Vehicle, EnquiryRequest } from './modals';
import { APIService } from '../Api/Services';
@Component(
    {
        templateUrl: 'views/cabs.html'
    })
export class VehiclesComponent {
    public cabObject: Vehicle[];
    constructor(private APIService: APIService) {
        this.cabObject = [new Vehicle('id', '', 7, 13, 'Toyota - AC', 'Preferable for large families'),
        new Vehicle('id', '', 5, 10, 'Indica - AC', 'Preferable for small families'),
        new Vehicle('id', '', 5, 10, 'Indica - Non - AC', 'Preferable for small families'),
        new Vehicle('id', '', 5, 10, 'Toyota - Non - AC', 'Preferable for small families'),
        new Vehicle('id', '', 8, 10, 'Shya - Non - AC', 'Preferable for heavy families')];

    }
}