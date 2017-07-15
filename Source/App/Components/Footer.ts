import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'footer-content',
    template: `<footer>
		<div class="footer-content">
		<div>Copyright © 2017 Dhyan Travels   |   </div>
		<div>
            <a (click)="AppNavigation('/Home')">Enquiry</a>
            <a (click)="AppNavigation('/Cabs')">Cabs</a>
            <a (click)="AppNavigation('/AboutUs')">About</a>
            <a (click)="AppNavigation('/ContactUs')" >Contact</a>
		</div>
         </div>
    </footer>`
})
export class FooterComponent {
     constructor(private route: Router) { }
    AppNavigation(linkObject: any) {
        console.log(linkObject);
        this.route.navigate(linkObject);

    }
}