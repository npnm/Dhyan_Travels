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
var core_1 = require("@angular/core");
var modals_1 = require('./modals');
var Services_1 = require('../Api/Services');
var VehiclesComponent = (function () {
    function VehiclesComponent(APIService) {
        this.APIService = APIService;
        this.cabObject = [new modals_1.Vehicle('id', '', 7, 13, 'Toyota - AC', 'Preferable for large families'),
            new modals_1.Vehicle('id', '', 5, 10, 'Indica - AC', 'Preferable for small families'),
            new modals_1.Vehicle('id', '', 5, 10, 'Indica - Non - AC', 'Preferable for small families'),
            new modals_1.Vehicle('id', '', 5, 10, 'Toyota - Non - AC', 'Preferable for small families'),
            new modals_1.Vehicle('id', '', 8, 10, 'Shya - Non - AC', 'Preferable for heavy families')];
    }
    VehiclesComponent = __decorate([
        core_1.Component({
            templateUrl: 'views/cabs.html'
        }), 
        __metadata('design:paramtypes', [Services_1.APIService])
    ], VehiclesComponent);
    return VehiclesComponent;
}());
exports.VehiclesComponent = VehiclesComponent;
//# sourceMappingURL=Vehicle.js.map