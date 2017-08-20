import { Component, HostBinding } from '@angular/core';
import { ApplicationConstants } from '../Common/Constants';


@Component({
    selector: 'carousel',
    template: `
       <div class="cabimages"  (mouseenter)="PauseAndDisplay(cabReqestType,'pause')" (mouseleave)="PauseAndDisplay(cabReqestType,'play')">     
            <div class="img-display" [ngClass]="{'active':cabimg.active}"   *ngFor="let cabimg of cab_slides">
                <img id="cab" [src]="cabimg.ImgURL">
                <div class="image-text left" [ngClass]="{'animatetext':showText_CAB,'animatetextreverse':!showText_CAB}">
                    <h1>{{cabimg.HeaderText}}</h1>
                    <p>{{cabimg.DescriptionText}}</p>
                </div>
            </div>
            <ol class="carousel-indicators">
            <li *ngFor="let cabimg of cab_slides" (click)="selectImage(cabReqestType,true,cabimg)" [ngClass]="{'active':cabimg.active}"></li>
            </ol>
        </div>
        <div class="tourimages"  (mouseenter)="PauseAndDisplay(tripReqestType,'pause')" (mouseleave)="PauseAndDisplay(tripReqestType,'play')">
            <div class="img-display"  [ngClass]="{'active':tourimg.active}" *ngFor="let tourimg of tour_slides">
                <img id="tour" [src]="tourimg.ImgURL">
                <div class="image-text right" [ngClass]="{'animatetext':showText_TRIP,'animatetextreverse':!showText_TRIP}">
                     <h1>{{tourimg.HeaderText}}</h1>
                    <p>{{tourimg.DescriptionText}}</p>
                </div>
            </div>
            <ol class="carousel-indicators">
            <li *ngFor="let tourimg of tour_slides" (click)="selectImage(tripReqestType,true,tourimg)" [ngClass]="{'active':tourimg.active}"></li>
            </ol>
        </div>
          
    `
})
export class Carousel {
    private cab_slides: Array<any> = [];
    private tour_slides: Array<any> = [];
    private timerId_CAB: any;
    private timerId_TRIP: any;
    private cabReqestType = ApplicationConstants.RequestType.CAB;
    private tripReqestType = ApplicationConstants.RequestType.TRIP;

    // @HostBinding('class.animate') 
    private showText_CAB: boolean = false;
    private showText_TRIP: boolean = false;
    constructor() {
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
    ngOnInit() {
        this.resetTimer(this.cabReqestType);
        this.resetTimer(this.tripReqestType);
    }
    selectImage(reqestType: string, selectImage: boolean, selectedImage: any) {
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
    }

    resetTimer(timerType: string) {
        if (timerType == this.cabReqestType) {
            this.timerId_CAB = setInterval(() => {
                this.changeImage(this.cabReqestType, false, null)
            }, 6000);
        }
        else if (timerType == this.tripReqestType) {
            this.timerId_TRIP = setInterval(() => {
                this.changeImage(this.tripReqestType, false, null)
            }, 4000);
        }
    }
    ngOnDestroy() {
        this.clearTimer(this.cabReqestType);
        this.clearTimer(this.tripReqestType);
    }

    changeImage(reqestType: string, selectImage: boolean, selectedImage: any) {
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
    }

    PauseAndDisplay(requestType: string, action: string) {
        if (action === 'pause') {
            this.clearTimer(requestType);
            if (requestType === 'CAB') {
                this.showText_CAB = true;
            }
            else {
                this.showText_TRIP = true;
            }
        }

        else if (action === 'play') {
            this.resetTimer(requestType);
            if (requestType === 'CAB') {
                this['showText_' + requestType] = false;
            }
            else {
                this.showText_TRIP = false;
            }
        }
    }

    clearTimer(reqestType: string) {

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
    }

}