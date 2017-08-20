import { Component } from '@angular/core';
import { APIService } from './Api/Services';
@Component(
    {
        selector: 'app',
        template: `
        <menu-items>Loading Menu items here ...</menu-items>
        <footer-content></footer-content>
        `
    })
export class AppComponent {
    constructor(private APIService: APIService)
    {
         this.APIService.LoadPage = true;
        if (this.APIService.PageContent === undefined) {
            this.APIService.FetchSiteContents().subscribe(data => {
                this.APIService.PageContent = data;
                this.APIService.LoadPage = true;
                console.log("ReadApplicationContentFile: Response ", data);
            });
        }
    }

}