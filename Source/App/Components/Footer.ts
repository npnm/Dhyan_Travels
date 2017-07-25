import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { MenuItemsComponent } from './MenuItems';

@Component({
    selector: 'footer-content',
    template: `<footer>
		<div class="footer-content">
		<div>Copyright © 2017 Dhyan Travels   |   </div>
		<div ><a *ngFor="let links of LinkItems" [routerLink]="[links.Link]" >{{links.LinkName}}</a>
         </div>
		</div>
    </footer>`
})
export class FooterComponent {

    private LinkItems: any;
    private MenuItemsComponentObejct: MenuItemsComponent;
    constructor() {
        this.MenuItemsComponentObejct = new MenuItemsComponent();
        this.LinkItems = this.MenuItemsComponentObejct.LinkItems;
    }
}