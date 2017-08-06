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
var Constants_1 = require('../Common/Constants');
var Carousel = (function () {
    function Carousel() {
        this.cab_slides = [];
        this.tour_slides = [];
        this.cabReqestType = Constants_1.ApplicationConstants.RequestType.CAB;
        this.tripReqestType = Constants_1.ApplicationConstants.RequestType.TRIP;
        for (var count = 1; count <= 3; count++) {
            this.cab_slides.push({
                HeaderText: 'Cab_' + count,
                DescriptionText: 'Decsription about image ' + count,
                ImgURL: '../Contents/Img/car/' + count + '.jpg',
                ImageIndex: 'CAB' + count,
                active: (count == 1) ? true : false
            });
            this.tour_slides.push({
                HeaderText: 'Tour_' + count,
                DescriptionText: 'Decsription about image ' + count,
                ImgURL: '../Contents/Img/tour/' + count + '.jpg',
                ImageIndex: 'TOUR' + count,
                active: (count == 1) ? true : false
            });
        }
    }
    Carousel.prototype.ngOnInit = function () {
        this.resetTimer(this.cabReqestType);
        this.resetTimer(this.tripReqestType);
    };
    Carousel.prototype.selectImage = function (reqestType, selectImage, selectedImage) {
        // this.changeImage(reqestType, selectImage, selectedImage);
        if (reqestType === this.cabReqestType) {
            for (var iCount = 0; iCount < this.cab_slides.length; iCount++) {
                if (this.cab_slides[iCount].ImageIndex === selectedImage.ImageIndex) {
                    this.cab_slides[iCount].active = true;
                }
                else {
                    this.cab_slides[iCount].active = false;
                }
            }
        }
        else {
            for (var iCount = 0; iCount < this.tour_slides.length; iCount++) {
                if (this.tour_slides[iCount].ImageIndex === selectedImage.ImageIndex) {
                    this.tour_slides[iCount].active = true;
                }
                else {
                    this.tour_slides[iCount].active = false;
                }
            }
        }
    };
    Carousel.prototype.resetTimer = function (timerType) {
        var _this = this;
        if (timerType == this.cabReqestType) {
            this.timerId_CAB = setInterval(function () {
                _this.changeImage(_this.cabReqestType, false, null);
            }, 6000);
        }
        else if (timerType == this.tripReqestType) {
            this.timerId_TRIP = setInterval(function () {
                _this.changeImage(_this.tripReqestType, false, null);
            }, 4000);
        }
    };
    Carousel.prototype.ngOnDestroy = function () {
        this.clearTimer(this.cabReqestType);
        this.clearTimer(this.tripReqestType);
    };
    Carousel.prototype.changeImage = function (reqestType, selectImage, selectedImage) {
        if (reqestType === this.cabReqestType) {
            for (var iCount = 0; iCount < this.cab_slides.length; iCount++) {
                if (this.cab_slides[iCount].active) {
                    this.cab_slides[iCount].active = false;
                    this.cab_slides[(this.cab_slides.length - 1) === iCount ? 0 : iCount + 1].active = true;
                    break;
                }
            }
        }
        else {
            for (var iCount = 0; iCount < this.tour_slides.length; iCount++) {
                if (this.tour_slides[iCount].active) {
                    this.tour_slides[iCount].active = false;
                    this.tour_slides[(this.tour_slides.length - 1) === iCount ? 0 : iCount + 1].active = true;
                    break;
                }
            }
        }
    };
    Carousel.prototype.PauseAndDisplay = function (reqestType, action) {
        if (action === 'pause') {
            this.clearTimer(reqestType);
        }
        else if (action === 'play') {
            this.resetTimer(reqestType);
        }
    };
    Carousel.prototype.clearTimer = function (reqestType) {
        if (reqestType === this.cabReqestType) {
            if (this.timerId_CAB) {
                clearInterval(this.timerId_CAB);
            }
        }
        else if (reqestType === this.tripReqestType) {
            if (this.timerId_TRIP) {
                clearInterval(this.timerId_TRIP);
            }
        }
    };
    Carousel = __decorate([
        core_1.Component({
            selector: 'carousel',
            template: "\n       <div class=\"cabimages\"  (mouseenter)=\"PauseAndDisplay(cabReqestType,'pause')\" (mouseleave)=\"PauseAndDisplay(cabReqestType,'play')\">     \n            <div class=\"img-display\" [ngClass]=\"{'active':cabimg.active}\"   *ngFor=\"let cabimg of cab_slides\">\n                <img id=\"cab\" [src]=\"cabimg.ImgURL\">\n                <div class=\"image-text left\">\n                    <h1>{{cabimg.HeaderText}}</h1>\n                    <p>{{cabimg.DescriptionText}}</p>\n                </div>\n            </div>\n            <ol class=\"carousel-indicators\">\n            <li *ngFor=\"let cabimg of cab_slides\" (click)=\"selectImage(cabReqestType,true,cabimg)\" [ngClass]=\"{'active':cabimg.active}\"></li>\n            </ol>\n        </div>\n        <div class=\"tourimages\"  (mouseenter)=\"PauseAndDisplay(tripReqestType,'pause')\" (mouseleave)=\"PauseAndDisplay(tripReqestType,'play')\">\n            <div class=\"img-display\"  [ngClass]=\"{'active':tourimg.active}\" *ngFor=\"let tourimg of tour_slides\">\n                <img id=\"tour\" [src]=\"tourimg.ImgURL\">\n                <div class=\"image-text right\">\n                     <h1>{{tourimg.HeaderText}}</h1>\n                    <p>{{tourimg.DescriptionText}}</p>\n                </div>\n            </div>\n            <ol class=\"carousel-indicators\">\n            <li *ngFor=\"let tourimg of tour_slides\" (click)=\"selectImage(tripReqestType,true,tourimg)\" [ngClass]=\"{'active':tourimg.active}\"></li>\n            </ol>\n        </div>\n          \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Carousel);
    return Carousel;
}());
exports.Carousel = Carousel;
//# sourceMappingURL=Carousel.js.map