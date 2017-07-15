import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'menu-items',
    template: `   
                <div class="MainHeader">
                       
                <div>
        <div class="nav">
            <div class="logo"></div>
            <ul class="navlist">
               <li [ngClass]="{'select':links.Active}" *ngFor="let links of LinkItems"><a [ngClass]="{'select':links.Active}" (click)="AppNavigation(links)">{{links.LinkName}}</a></li>  
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
    constructor(private route: Router) { }
    public titleText: string = "Payana";

    //Application Links
    public LinkItems = [
        { LinkName: "Home", Link: "/Home", Active: true },
        { LinkName: "Cabs", Link: "/Cabs", Active: false },
        { LinkName: "About", Link: "/AboutUs", Active: false },
        { LinkName: "Contact", Link: "/ContactUs", Active: false }];

    //Function to navigate
    AppNavigation(linkObject: any) {
        console.log(linkObject);
        for (var link in this.LinkItems) {
            if(this.LinkItems[link].Link === linkObject.Link){
                this.LinkItems[link].Active = true;
            }
            else{
            this.LinkItems[link].Active = false;
            }
        }
        this.route.navigate([linkObject.Link]);

    }
}