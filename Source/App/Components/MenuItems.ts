import { Component } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
@Component({
    selector: 'menu-items',
    template: `   
                <div class="MainHeader">
                       
                <div>
        <div class="nav">
            <div class="logo"></div>
            <ul class="navlist">
               <li [routerLinkActive]="['select']" *ngFor="let links of LinkItems"><a [routerLinkActive]="['select']" [routerLink]="[links.Link]">{{links.LinkName}}</a></li>  
            </ul>

        </div>
        <div style="
    height: 2px;
    background-color: #000d58;
        display: inline-block;
            width: 100%;"></div>
        <div style="
    height: 2px;
    background-color: #f3cc2f;
	margin-bottom: 3px;
            width: 100%;"></div>
    </div>
   </div>
   <router-outlet></router-outlet>
   `
})
export class MenuItemsComponent {
    constructor() {     
    }

    //Application Links
    public LinkItems = [
        { LinkName: "Home", Link: "/Home", Active: true },
        { LinkName: "Cabs", Link: "/Cabs", Active: false },
        { LinkName: "About", Link: "/AboutUs", Active: false },
        { LinkName: "Contact", Link: "/ContactUs", Active: false }];
  
}