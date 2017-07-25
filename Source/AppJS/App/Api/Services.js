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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.apiURL = 'http://localhost:8000';
        this.LoadPage = false;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }
    APIService.prototype.FetchSiteContents = function () {
        return this.http.get(this.apiURL + '/ReadApplicationContentFile').map(function (response) { return response.json(); });
        // .catch(error => error.json())
    };
    APIService.prototype.NotifyCustomer = function (req) {
        // return this.http.post(this.apiURL + '/NotifyCustomer', req).map(this.handleSuccess)
        return this.http.post(this.apiURL + '/NotifyCustomer', req, { headers: this.headers }).map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    APIService.prototype.handleSuccess = function (res) {
        // In a real world app, you might use a remote logging infrastructure        
        console.log(res);
    };
    APIService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    APIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], APIService);
    return APIService;
}());
exports.APIService = APIService;
//# sourceMappingURL=Services.js.map